const footerContainer = document.querySelector('#footer');

if (!footerContainer) {
    console.error('No se encontró el contenedor #footer.');
} else {
    fetch('../footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`No se pudo cargar footer.html: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            footerContainer.outerHTML = html;
        })
        .catch(error => {
            console.error('Error al cargar el pie de página:', error);
        });
}
