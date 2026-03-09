// Función para descargar el PDF
document.getElementById('downloadBtn').addEventListener('click', function() {
    const element = document.querySelector('.content-wrapper'); // Captura solo el contenido principal para evitar márgenes extra
    const opt = {
        margin: 0,
        filename: `Kevin_Campos_Resume_${new Date().getFullYear()}.pdf`,
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

// Función para descargar el TXT
document.getElementById('downloadTxtBtn').addEventListener('click', function() {
    // Extraer información del curriculum
    const name = document.querySelector('h1').textContent;
    const subtitle = document.querySelector('.subtitle').textContent;
    
    // Extraer perfil
    const profileParagraphs = document.querySelectorAll('.profile p');
    let profile = '';
    profileParagraphs.forEach(p => {
        profile += p.textContent.trim() + '\n\n';
    });
    
    // Extraer contacto
    const contactItems = document.querySelectorAll('.contact-item');
    let contact = 'CONTACT INFORMATION\n';
    contact += '==================\n';
    contactItems.forEach(item => {
        const text = item.textContent.trim();
        // Eliminar emojis y limpiar texto
        const cleanText = text.replace(/[^\w\s@.-]/g, '').trim();
        if (cleanText) {
            contact += cleanText + '\n';
        }
    });
    
    // Extraer educación
    const educationItems = document.querySelectorAll('.education-item');
    let education = '\nEDUCATION\n';
    education += '=========\n';
    educationItems.forEach(item => {
        const year = item.querySelector('.education-year').textContent.trim();
        const title = item.querySelector('.education-title').textContent.trim();
        const school = item.querySelector('.education-school').textContent.trim();
        education += `${year} - ${title}\n`;
        education += `  ${school}\n\n`;
    });
    
    // Extraer experiencia laboral
    const jobItems = document.querySelectorAll('.job-item');
    let experience = '\nWORK EXPERIENCE\n';
    experience += '===============\n';
    jobItems.forEach(item => {
        const year = item.querySelector('.job-year').textContent.trim();
        const title = item.querySelector('.job-title').textContent.trim();
        const company = item.querySelector('.job-company').textContent.trim();
        const descriptions = item.querySelectorAll('.job-description');
        
        experience += `${year} - ${title}\n`;
        experience += `  ${company}\n`;
        descriptions.forEach(desc => {
            experience += `  • ${desc.textContent.trim()}\n`;
        });
        experience += '\n';
    });
    
    // Extraer habilidades técnicas
    const skillCategories = document.querySelectorAll('.skill-category');
    let skills = '\nTECHNICAL SKILLS\n';
    skills += '================\n';
    skillCategories.forEach(category => {
        const header = category.querySelector('.skills-subheader').textContent.trim();
        const list = category.querySelector('.skills-list').textContent.trim();
        skills += `${header}:\n`;
        skills += `  ${list}\n\n`;
    });
    
    // Extraer experiencia en IA
    const aiDescription = document.querySelector('.ai-description').textContent.trim();
    let aiExperience = '\nGENERATIVE AI EXPERIENCE\n';
    aiExperience += '========================\n';
    aiExperience += `${aiDescription}\n`;
    
    // Extraer idiomas
    const languageBlocks = document.querySelectorAll('.language-block');
    let languages = '\nLANGUAGES\n';
    languages += '=========\n';
    languageBlocks.forEach(block => {
        const name = block.querySelector('.language-name').textContent.trim();
        languages += `${name}\n`;
    });
    
    // Combinar todo el contenido
    let txtContent = `${name}\n${subtitle}\n`;
    txtContent += '='.repeat(name.length + subtitle.length + 1) + '\n\n';
    txtContent += profile;
    txtContent += contact;
    txtContent += education;
    txtContent += experience;
    txtContent += skills;
    txtContent += aiExperience;
    txtContent += languages;
    
    // Crear y descargar el archivo
    const blob = new Blob([txtContent], { type: 'text/plain;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Kevin_Campos_Resume_${new Date().getFullYear()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
});