const headerContainer = document.querySelector('#header');

if (!headerContainer) {
    console.error('No se encontró el contenedor #header.');
} else {
    fetch('../header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`No se pudo cargar header.html: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            headerContainer.innerHTML = html;

            const menuScript = document.createElement('script');
            menuScript.src = '../js/menu.js';
            menuScript.onerror = () => {
                console.error('No se pudo cargar js/menu.js.');
            };
            document.body.appendChild(menuScript);
        })
        .catch(error => {
            console.error('Error al cargar el encabezado:', error);
        });
}
