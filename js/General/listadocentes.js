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

    divimagen.classList.add('imagen');
    divinfo.classList.add('info');
    divdocenteinfo.classList.add('docenteinfo');

    divlista.classList.add('lista');
    divlista.classList.add('lista-con-imagen');

    const nombre = document.createElement('h3');
    nombre.textContent = docente.nombre;
    divinfo.append(nombre);
    //SECCION DE DIVDOCENTE INFO
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
    divimagen.append(imagen);
    divlista.append(divimagen);
    divlista.append(divinfo);


    elemento.append(divlista);
    //Añado cada cosa de html creada al elemento li y luego ese elemento lo añado al container

    docenteContainer.append(elemento);
}