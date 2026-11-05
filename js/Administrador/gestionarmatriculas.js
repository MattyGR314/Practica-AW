const matriculaContainer = document.querySelector('#listamatriculas');

if (!matriculaContainer) {
    console.error('No se encontró el contenedor #listamatriculas.');
} else if (!window.matriculas) {
    console.error('No se encontraron datos de matrículas.');
} else {
    window.matriculas.forEach(mostrarMatriculaEnLista);   //hace el metodo sobre el array creado en matriculas.js
}

function mostrarMatriculaEnLista(matricula) {
    const elemento = document.createElement('li');  //Crea los elementos de html desde document
    const divlista = document.createElement('div');
    const divinfo = document.createElement('div');
    const divbotones = document.createElement('div');

    divbotones.classList.add('botonesadmin');
    divinfo.classList.add('info');
    divlista.classList.add('lista');
    divlista.classList.add('lista-matricula');

    const id = document.createElement('h3');
    id.textContent = `Id: ${matricula.id}`;
    divinfo.append(id);
    const nombre = document.createElement('h3');
    nombre.textContent = matricula.nombre;
    divinfo.append(nombre);
    const curso = document.createElement('p');
    curso.textContent = `Curso: ${matricula.curso}`;
    divinfo.append(curso);
    const fechaMatricula = document.createElement('p');
    fechaMatricula.textContent = `Fecha de matrícula: ${matricula.FechaMatricula}`;
    divinfo.append(fechaMatricula);
    const estado = document.createElement('p');
    estado.textContent = `Estado: ${matricula.Estado}`;
    divinfo.append(estado);

    divlista.append(divinfo);

    const botonEditar = document.createElement('button');
    botonEditar.type = 'button';
    botonEditar.textContent = 'Editar';
    botonEditar.addEventListener('click', () => {
        window.location.href = 'editaraula.html';
    });

    const botonEliminar = document.createElement('button');
    botonEliminar.type = 'button';
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.addEventListener('click', () => {
        window.location.href = 'dardebaja.html';
    });
    divbotones.append(botonEliminar);
    divbotones.append(botonEditar);

    divlista.append(divbotones);

    elemento.append(divlista);
    //Añado cada cosa de html creada al elemento li y luego ese elemento lo añado al container

    matriculaContainer.append(elemento);
}