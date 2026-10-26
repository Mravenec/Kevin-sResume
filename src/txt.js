import { collapsedJobStart, resumeIdentity, translations } from './content.js';

function heading(title, leadingBreak) {
    const line = `${title}\n`;
    const prefix = leadingBreak ? '\n' : '';
    return `${prefix}${line}${'='.repeat(line.length - 1)}\n`;
}

function jobBlock(job) {
    let block = `${job.year} - ${job.title}\n  ${job.company}\n`;
    job.descriptions.forEach((desc, index) => {
        block += `  • ${desc}\n`;
        if (index < job.descriptions.length - 1) block += '\n';
    });
    return `${block}\n`;
}

export function downloadResumeTxt(language, compressed) {
    const copy = translations[language];
    const langSuffix = language === 'es' ? '_ES' : '_EN';
    const name = resumeIdentity.name;
    const recent = copy.jobItems.slice(0, collapsedJobStart);
    const older = copy.jobItems.slice(collapsedJobStart);
    const jobs = compressed ? [...recent, copy.summaryJob] : [...recent, ...older];
    const contacts = [
        resumeIdentity.phone,
        resumeIdentity.email,
        resumeIdentity.location,
        'github.com/mravenec',
        'gitlab.com/kcamposgo90',
        'linkedin.com/in/kevincamposgonzalez'
    ];

    let text = `${name}\n${copy.subtitle}\n`;
    text += `${'='.repeat(name.length + copy.subtitle.length + 1)}\n\n`;
    copy.profile.forEach(paragraph => {
        text += `${paragraph}\n\n`;
    });
    text += heading(language === 'es' ? 'INFORMACIÓN DE CONTACTO' : 'CONTACT INFORMATION', false);
    contacts.forEach(line => {
        text += `${line}\n`;
    });
    text += heading(language === 'es' ? 'EDUCACIÓN' : 'EDUCATION', true);
    copy.educationItems.forEach(item => {
        text += `${item.year} - ${item.title}\n  ${item.school}\n\n`;
    });
    text += heading(language === 'es' ? 'EXPERIENCIA LABORAL' : 'WORK EXPERIENCE', true);
    jobs.forEach(job => {
        text += jobBlock(job);
    });
    text += heading(language === 'es' ? 'HABILIDADES TÉCNICAS' : 'TECHNICAL SKILLS', true);
    copy.skillCategories.forEach(category => {
        text += `${category.header}:\n  ${category.list}\n\n`;
    });
    text += heading(language === 'es' ? 'EXPERIENCIA CON IA GENERATIVA' : 'GENERATIVE AI EXPERIENCE', true);
    copy.aiDescription.forEach(paragraph => {
        text += `${paragraph}\n\n`;
    });
    text += heading(language === 'es' ? 'IDIOMAS' : 'LANGUAGES', true);
    copy.languageNames.forEach(label => {
        text += `${label}\n`;
    });

    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Kevin_Campos_Resume_${langSuffix}_${new Date().getFullYear()}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
}
