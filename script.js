// Función para descargar el PDF
document.getElementById('downloadBtn').addEventListener('click', function() {
    const element = document.body; // Captura todo el body para el PDF
    const opt = {
        margin: 0.1, // Márgenes mínimos
        filename: 'Kevin_Campos_Resume_2025.pdf',
        image: { type: 'jpeg', quality: 0.95 },
        html2canvas: { scale: 1, useCORS: true }, // Escala reducida para máxima compresión
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
});
