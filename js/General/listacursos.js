const cursos[] = [
    {
    id: 1,
    nombre: "AW",
    descripcion: "Sufrimiento y más sufrimiento",
    docente: "Montenegro?",
    aula: "Aula 4",
    fechaInicio: "2026-09-09",
    fechaFin: "2026-12-09",
    horario: "Lunes y miércoles de 10:00 a 12:00",
    maxPlazas: 120,
    estado: "Activo",
    img: "../img/lab.jpg"
},
{
    id: 2,
    nombre: "MS",
    descripcion: "Sufrimiento y desesperación",
    docente: "Antonio Navarro Martín",
    aula: "Aula 4",
    fechaInicio: "2026-09-09",
    fechaFin: "2026-12-09",
    horario: "Lunes y miércoles de 10:00 a 12:00",
    maxPlazas: 120,
    estado: "Activo",
    img: "../img/lab.jpg"
}];

const cursoContainer = document.querySelector('#listacurso');

if (!headerContainer) {
    console.error('No se encontró el contenedor #listacurso.');
} else{
    document.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < cursos.length; i++) {
        mostrarCurso(cursos[i]);
    }
});
}

function mostrarCurso(curso) {    
    cursoContainer.innerHTML = `
        <h1>Curso ${curso.id}</h1>
        <img src="${curso.img}" alt="Imagen del Curso ${curso.id}">
        <p>Descripción del curso ${curso.id}...</p>
        <li>Id: ${curso.id}</li>
        <li>Nombre: ${curso.nombre}</li>
        <li>Descripción: ${curso.descripcion}</li>
        <li>Docente responsable: ${curso.docente}</li>
        <li>Aula asignada: ${curso.aula}</li>
        <li>Fecha de inicio: <time datetime="${curso.fechaInicio}">${curso.fechaInicio}</time></li>
        <li>Fecha de finalización: <time datetime="${curso.fechaFin}">${curso.fechaFin}</time></li>
        <li>Horario: ${curso.horario}</li>
        <li>Número máximo de plazas: ${curso.maxPlazas}</li>
        <li>Estado: ${curso.estado}</li>`;
}