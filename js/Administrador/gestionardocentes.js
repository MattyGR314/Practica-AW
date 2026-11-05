const docenteContainer = document.querySelector('#lista-docentes');

if (!docenteContainer) {
    console.error('No se encontró el contenedor #lista-docentes.');
} else if (!window.docentes) {
    console.error('No se encontraron datos de docentes.');
} else {
    window.docentes.forEach(mostrarDocenteEnLista);   //hace el metodo sobre el array creado en docentes.js
}

function mostrarDocenteEnLista(docente) {
    const elemento = document.createElement('li');  //Crea los elementos de html desde document
    const divlista = document.createElement('div');
    const divimagen = document.createElement('div');
    const divinfo = document.createElement('div');
    const divdocenteinfo = document.createElement('div');
    const divbotones = document.createElement('div');

    divbotones.classList.add('botonesadmin');
    divimagen.classList.add('imagen');
    divinfo.classList.add('info');
    divdocenteinfo.classList.add('docenteinfo');

    divlista.classList.add('lista');
    divlista.classList.add('lista-con-imagen');

    const id = document.createElement('h3');
    id.textContent = `Id: ${docente.id}`;
    divinfo.append(id);
    //SECCION DE DIVDOCENTE INFO
    const nombre = document.createElement('h3');
    nombre.textContent = docente.nombre;
    divdocenteinfo.append(nombre);
    const asignatura = document.createElement('p');
    asignatura.textContent = `Ubicación: ${docente.asignatura}`;
    divdocenteinfo.append(asignatura);
    const correo = document.createElement('p');
    correo.textContent = docente.correo;
    divdocenteinfo.append(correo);
    const tlf = document.createElement('p');
    tlf.textContent = docente.telefono;
    divdocenteinfo.append(tlf);
    divinfo.append(divdocenteinfo);

    const estado = document.createElement('p');
    estado.textContent = `Estado: ${docente.estado}`;
    divinfo.append(estado);
    //SECCION DE DIVIMG
    const imagen = document.createElement('img');
    imagen.src = docente.img;
    imagen.alt = ` ${docente.nombre}`;

    const botonEditar = document.createElement('button');
    botonEditar.type = 'button';
    botonEditar.textContent = 'Editar';
    botonEditar.addEventListener('click', () => {
        window.location.href = 'editardocente.html';
    });

    const botonEliminar = document.createElement('button');
    botonEliminar.type = 'button';
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.addEventListener('click', () => {
        window.location.href = 'dardebaja.html';
    });
    
    divbotones.append(botonEditar);
    divbotones.append(botonEliminar);
    

    divimagen.append(imagen);
    divlista.append(divimagen);
    divlista.append(divinfo);
    divlista.append(divbotones);

    elemento.append(divlista);
    //Añado cada cosa de html creada al elemento li y luego ese elemento lo añado al container

    docenteContainer.append(elemento);
}