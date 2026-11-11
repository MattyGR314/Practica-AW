const cursoContainer = document.querySelector('#lista-cursos');

if (!cursoContainer) {
    console.error('No se encontró el contenedor #lista-cursos.');
} else if (!window.cursos) {
    console.error('No se encontraron datos de cursos.');
} else {
    window.cursos.forEach(mostrarCursoEnLista);
}

function mostrarCursoEnLista(curso) {
    const elemento = document.createElement('li');
    const botonDetalles = document.createElement('button');
    const botonMatricula = document.createElement('button');    //Crea los elementos de html desde document
    const img = document.createElement('img');
    img.src = "../img/icons/caret-right-square.svg";
    img.alt = `Imagen del curso ${curso.nombre}`;

    botonDetalles.type = 'button';
    botonDetalles.textContent = curso.nombre;
    botonDetalles.addEventListener('click', () => {
        window.location.href = `curso1.html?id=${(curso.id)}`;
    }); //organiza las diferentes pantallas dinamicas por id de curso

    botonMatricula.type = 'button';
    botonMatricula.textContent = 'Matricularse';
    botonMatricula.classList.add('botondorado');
    botonMatricula.addEventListener('click', () => {
        window.location.href = 'matricula.html';
    });

    elemento.append(img,botonDetalles, botonMatricula);
    cursoContainer.append(elemento);
}