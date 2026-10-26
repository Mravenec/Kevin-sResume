import { jsPDF } from 'jspdf';

export function atsPlain(value) {
    return String(value)
        .replace(/[\u2018\u2019]/g, "'")
        .replace(/[\u201C\u201D]/g, '"')
        .replace(/[\u2013\u2014]/g, '-')
        .replace(/\u00A0/g, ' ')
        .replace(/[^\x0A\x0D\x20-\xFF]/g, '')
        .replace(/[ \t]+/g, ' ')
        .trim();
}

export function svgIconDataUrl(svg) {
    const px = 128;
    const canvas = document.createElement('canvas');
    canvas.width = px;
    canvas.height = px;
    const ctx = canvas.getContext('2d');
    const box = svg.viewBox.baseVal;
    const w = box && box.width ? box.width : 24;
    const h = box && box.height ? box.height : 24;
    ctx.scale(px / w, px / h);
    const fallback = svg.getAttribute('fill') || '#24292f';
    svg.querySelectorAll('path').forEach(path => {
        const d = path.getAttribute('d');
        if (!d) return;
        ctx.fillStyle = path.getAttribute('fill') || fallback;
        ctx.fill(new Path2D(d));
    });
    return canvas.toDataURL('image/png');
}

export function emojiDataUrl(char) {
    const px = 64;
    const canvas = document.createElement('canvas');
    canvas.width = px;
    canvas.height = px;
    const ctx = canvas.getContext('2d');
    ctx.font = '52px "Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(char, px / 2, px / 2);
    return canvas.toDataURL('image/png');
}

export function cssRgb(color) {
    const match = String(color).match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
    if (!match || match[4] === '0') return null;
    return [Number(match[1]), Number(match[2]), Number(match[3])];
}

export function cssGradient(image) {
    const stops = [...String(image).matchAll(/rgba?\((\d+),\s*(\d+),\s*(\d+)/g)]
        .map(match => [Number(match[1]), Number(match[2]), Number(match[3])]);
    return stops.length >= 2 ? [stops[0], stops[stops.length - 1]] : null;
}

export function collectAtsLines(root) {
    const lines = [];
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
        const parent = node.parentElement;
        if (!parent || parent.closest('.toggle-btn, #experience-toggle-header')) continue;
        const raw = node.textContent;
        if (!raw || !raw.trim()) continue;
        const style = getComputedStyle(parent);
        if (style.display === 'none' || style.visibility === 'hidden') continue;
        const range = document.createRange();
        let lineText = '';
        let lineTop = null;
        let lineLeft = 0;
        let lineRight = 0;
        let lineHeight = 0;
        const flush = () => {
            let text = atsPlain(lineText);
            if (style.textTransform === 'uppercase') text = text.toUpperCase();
            else if (style.textTransform === 'lowercase') text = text.toLowerCase();
            if (!text || lineTop === null) return;
            lines.push({
                text,
                x: lineLeft,
                y: lineTop,
                w: Math.max(lineRight - lineLeft, 1),
                h: lineHeight,
                fontSize: parseFloat(style.fontSize) || 9.5,
                fontWeight: style.fontWeight,
                fontStyle: style.fontStyle,
                color: cssRgb(style.color) || [30, 41, 59]
            });
        };
        for (let i = 0; i < raw.length; i++) {
            range.setStart(node, i);
            range.setEnd(node, i + 1);
            const rect = range.getBoundingClientRect();
            if (rect.width === 0 && rect.height === 0) continue;
            if (lineTop !== null && Math.abs(rect.top - lineTop) > 1) {
                flush();
                lineText = '';
                lineTop = null;
            }
            if (lineTop === null) {
                lineTop = rect.top;
                lineLeft = rect.left;
                lineRight = rect.right;
                lineHeight = rect.height;
            } else {
                lineLeft = Math.min(lineLeft, rect.left);
                lineRight = Math.max(lineRight, rect.right);
                lineHeight = Math.max(lineHeight, rect.height);
            }
            lineText += raw[i];
        }
        flush();
    }
    return lines;
}

export function paintAtsResume(doc, root, place) {
    const scaleX = place.scaleX;
    const scaleY = place.scaleY;
    const origin = root.getBoundingClientRect();
    const mapX = (left) => place.offsetX + (left - origin.left) * scaleX;
    const mapY = (top) => place.offsetY + (top - origin.top) * scaleY;
    const boxes = [];
    root.querySelectorAll('*').forEach(el => {
        if (el.closest('.toggle-btn, #experience-toggle-header')) return;
        const style = getComputedStyle(el);
        if (style.display === 'none' || style.visibility === 'hidden') return;
        const rect = el.getBoundingClientRect();
        if (rect.width < 1 || rect.height < 1) return;
        let fill = null;
        let gradient = null;
        if (style.backgroundImage && style.backgroundImage !== 'none') {
            if (el.matches('h1, h2')) fill = [37, 99, 235];
            else if (el.matches('.profile')) fill = [240, 249, 255];
            else gradient = cssGradient(style.backgroundImage);
        } else {
            fill = cssRgb(style.backgroundColor);
        }
        const box = {
            x: mapX(rect.left),
            y: mapY(rect.top),
            w: rect.width * scaleX,
            h: rect.height * scaleY
        };
        if (gradient) {
            boxes.push({ kind: 'gradient', ...box, stops: gradient });
        } else if (fill) {
            boxes.push({ kind: 'fill', ...box, fill });
        }
        const border = parseFloat(style.borderLeftWidth);
        const borderColor = cssRgb(style.borderLeftColor);
        if (border >= 1 && borderColor && el.matches('.job-item, .education-item, .profile')) {
            boxes.push({
                kind: 'fill',
                x: mapX(rect.left),
                y: mapY(rect.top),
                w: Math.max(border, 2) * scaleX,
                h: rect.height * scaleY,
                fill: borderColor
            });
        }
    });
    boxes.forEach(box => {
        if (box.kind === 'gradient') {
            const [start, end] = box.stops;
            const steps = Math.max(12, Math.round(box.w));
            for (let i = 0; i < steps; i++) {
                const t = steps === 1 ? 0 : i / (steps - 1);
                doc.setFillColor(
                    Math.round(start[0] + (end[0] - start[0]) * t),
                    Math.round(start[1] + (end[1] - start[1]) * t),
                    Math.round(start[2] + (end[2] - start[2]) * t)
                );
                doc.rect(box.x + (box.w * i) / steps, box.y, box.w / steps + 0.15, box.h, 'F');
            }
            return;
        }
        doc.setFillColor(box.fill[0], box.fill[1], box.fill[2]);
        doc.rect(box.x, box.y, box.w, box.h, 'F');
    });

    collectAtsLines(root).forEach(line => {
        const weight = parseInt(line.fontWeight, 10);
        const styleName = line.fontStyle === 'italic'
            ? (weight >= 600 ? 'bolditalic' : 'italic')
            : (weight >= 600 ? 'bold' : 'normal');
        doc.setFont('helvetica', styleName);
        doc.setTextColor(line.color[0], line.color[1], line.color[2]);
        let size = line.fontSize * scaleY;
        doc.setFontSize(size);
        const textWidth = doc.getTextWidth(line.text);
        const maxWidth = Math.max(line.w * scaleX, 1);
        if (textWidth > maxWidth) {
            size *= maxWidth / textWidth;
            doc.setFontSize(size);
        }
        const x = mapX(line.x);
        const y = mapY(line.y) + line.h * 0.8 * scaleY;
        doc.text(line.text, x, y);
    });

    root.querySelectorAll('.icon').forEach(el => {
        const style = getComputedStyle(el);
        if (style.display === 'none' || style.visibility === 'hidden') return;
        const svg = el.querySelector('svg');
        const text = el.textContent.trim();
        if (!svg && !text) return;
        const rect = el.getBoundingClientRect();
        if (rect.width < 1 || rect.height < 1) return;
        doc.addImage(
            svg ? svgIconDataUrl(svg) : emojiDataUrl(text),
            'PNG',
            mapX(rect.left),
            mapY(rect.top),
            rect.width * scaleX,
            rect.height * scaleY
        );
    });

    root.querySelectorAll('a[href]').forEach(el => {
        const href = el.href;
        if (!href) return;
        const rect = el.getBoundingClientRect();
        if (rect.width < 1 || rect.height < 1) return;
        doc.link(mapX(rect.left), mapY(rect.top), rect.width * scaleX, rect.height * scaleY, { url: href });
    });
}

export function buildAtsResumePdf(root) {
    const pageW = 612;
    const pageH = 792;
    document.documentElement.classList.add('pdf-letter');
    try {
        const rect = root.getBoundingClientRect();
        const natural = 72 / 96;
        const fit = Math.min(pageW / (rect.width * natural), pageH / (rect.height * natural));
        const scale = natural * fit;
        const drawnW = rect.width * scale;
        const drawnH = rect.height * scale;
        const doc = new jsPDF({
            unit: 'pt',
            format: [pageW, pageH],
            compress: true
        });
        doc.setProperties({
            title: 'Kevin Campos Gonzalez - Resume',
            author: 'Kevin Campos Gonzalez'
        });
        paintAtsResume(doc, root, {
            scaleX: scale,
            scaleY: scale,
            offsetX: (pageW - drawnW) / 2,
            offsetY: (pageH - drawnH) / 2
        });
        return doc;
    } finally {
        document.documentElement.classList.remove('pdf-letter');
    }
}

