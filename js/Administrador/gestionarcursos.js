const cursoContainer = document.querySelector('#listacursos');

if (!cursoContainer) {
    console.error('No se encontró el contenedor #listacursos.');
} else if (!window.cursos) {
    console.error('No se encontraron datos de cursos.');
} else {
    window.cursos.forEach(mostrarCursoEnLista);
}

function mostrarCursoEnLista(curso) {
    const elemento = document.createElement('li');
    const divlista = document.createElement('div');
    const divinfo = document.createElement('div');
    const divimg = document.createElement('div');
    const divbotones = document.createElement('div');

    divlista.classList.add('lista');
    divlista.classList.add('lista-con-imagen');
    divinfo.classList.add('info');
    divimg.classList.add('imagen');
    divbotones.classList.add('botonesadmin');

    const imagen = document.createElement('img');
    imagen.src = curso.img;
    imagen.alt = `Imagen del curso ${curso.nombre}`;
    divimg.append(imagen);

    const id = document.createElement('h3');
    id.textContent = curso.id;
    divinfo.append(id);
    const nombre = document.createElement('p');
    nombre.textContent = `Nombre: ${curso.nombre}`;
    divinfo.append(nombre);
    const descripcion = document.createElement('p');
    descripcion.textContent = `Descripción: ${curso.descripcion}`;
    divinfo.append(descripcion);
    const aula = document.createElement('p');
    aula.textContent = `Aula: ${curso.aula}`;
    divinfo.append(aula);
    const fechaInicio = document.createElement('p');
    fechaInicio.textContent = `Fecha de inicio: ${curso.fechaInicio}`;
    divinfo.append(fechaInicio);
    const fechaFin = document.createElement('p');
    fechaFin.textContent = `Fecha de fin: ${curso.fechaFin}`;
    divinfo.append(fechaFin);
    const horario = document.createElement('p');
    horario.textContent = `Horario: ${curso.horario}`;
    divinfo.append(horario);
    const maxPlazas = document.createElement('p');
    maxPlazas.textContent = `Máximo de plazas: ${curso.maxPlazas}`;
    divinfo.append(maxPlazas);
    const estado = document.createElement('p');
    estado.textContent = `Estado: ${curso.estado}`;
    divinfo.append(estado);

    const botonEditar = document.createElement('button');
    botonEditar.type = 'button';
    botonEditar.textContent = 'Editar';
    botonEditar.addEventListener('click', () => {
        window.location.href = `editarcurso.html`;
    });
    divbotones.append(botonEditar);

    const botonEliminar = document.createElement('button');
    botonEliminar.type = 'button';
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.addEventListener('click', () => {
        window.location.href = `dardebaja.html`;
    });
    divbotones.append(botonEliminar);

    divlista.append(divimg, divinfo, divbotones);
    elemento.append(divlista);
    //Añado cada cosa de html creada al elemento li y luego ese elemento lo añado al container  
    cursoContainer.append(elemento);
}