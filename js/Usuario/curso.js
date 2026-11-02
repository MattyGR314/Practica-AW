const cursoContainer = document.querySelector('#listacurso');
const cursoId = new URLSearchParams(window.location.search).get('id');//Desde el id pasado en listacursos.js coge el curso que sea para cargar dinamicamente
const curso = window.cursos?.find((item) => String(item.id) === cursoId)
    ?? window.cursos?.[0];  //Revisar que pollas hace esto
//LE PASA EL CURSO QUE ES POR LA URL Y AQUI LO PILLA 
if (!cursoContainer) {
    console.error('No se encontró el contenedor #listacurso.');
} else if (!curso) {
    console.error('No se encontraron datos de cursos.');
} else {
    mostrarCurso(curso);
}

function mostrarCurso(curso) {  //monta la página desde 0 del cursod e forma dinámica
    document.title = `Curso ${curso.nombre}`;
    const titulo = document.querySelector('#titulo-curso');
    if (titulo) {
        titulo.textContent = `Curso ${curso.nombre}`;
    }
    const migas = document.querySelector('#miga-curso');
    if (migas) {
        migas.textContent = `Curso ${curso.nombre}`;
    }

    const imagen = document.createElement('img');
    imagen.src = curso.img;
    imagen.alt = `Imagen del curso ${curso.nombre}`;
    cursoContainer.append(imagen);

    const datos = [
        ['Id', curso.id],
        ['Nombre', curso.nombre],
        ['Descripción', curso.descripcion],
        ['Docente responsable', curso.docente],
        ['Aula asignada', curso.aula],
        ['Fecha de inicio', curso.fechaInicio],
        ['Fecha de finalización', curso.fechaFin],
        ['Horario', curso.horario],
        ['Número máximo de plazas', curso.maxPlazas],
        ['Estado', curso.estado]
    ];

    datos.forEach(([etiqueta, valor]) => {
        const elemento = document.createElement('li');
        elemento.textContent = `${etiqueta}: ${valor}`;
        cursoContainer.append(elemento);
    });
}

//LO QUE NO ENTIENDO ES COMO SABE JS QUE QUIERO QUE SE PONGA JUSTO DEBAJE DEL UL????