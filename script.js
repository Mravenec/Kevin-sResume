// Función para descargar el PDF
document.getElementById('downloadBtn').addEventListener('click', function() {
    const element = document.querySelector('.content-wrapper'); // Captura solo el contenido principal para evitar márgenes extra
    const opt = {
        margin: 0,
        filename: 'Kevin_Campos_Resume_2025.pdf',
        image: { type: 'jpeg', quality: 1.0 },
        html2canvas: {
            scale: 2, // Alta resolución para precisión
            useCORS: true,
            allowTaint: true,
            backgroundColor: '#ffffff', // Fondo blanco para consistencia
            width: element.offsetWidth, // Ancho exacto del contenido
            height: element.offsetHeight, // Alto exacto del contenido
            scrollX: 0,
            scrollY: 0
        },
        jsPDF: {
            unit: 'px',
            format: [element.offsetWidth, element.offsetHeight], // Tamaño personalizado basado en el contenido
            orientation: 'portrait',
            compress: true
        },
        pagebreak: { mode: 'avoid-all' }
    };
    html2pdf().set(opt).from(element).save();
});