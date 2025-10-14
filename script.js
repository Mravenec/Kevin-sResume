// Función para descargar el PDF
document.getElementById('downloadBtn').addEventListener('click', function() {
    const element = document.body; // Captura todo el body para el PDF
    const opt = {
        margin: 0, // Sin márgenes para evitar páginas extra
        filename: 'Kevin_Campos_Resume_2025.pdf',
        image: { type: 'jpeg', quality: 0.95 },
        html2canvas: { scale: 1, useCORS: true },
        jsPDF: { unit: 'in', format: [8.5, 11], orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
});