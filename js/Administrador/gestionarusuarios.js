const usuarioContainer = document.querySelector('#listausuarios');

if (!usuarioContainer) {
    console.error('No se encontró el contenedor #listausuarios.');
} else if (!window.usuarios) {
    console.error('No se encontraron datos de usuarios.');
} else {
    window.usuarios.forEach(mostrarUsuarioEnLista);   //hace el metodo sobre el array creado en usuarios.js
}

function mostrarUsuarioEnLista(usuario) {
    const elemento = document.createElement('li');  //Crea los elementos de html desde document
    const divlista = document.createElement('div');
    const divinfo = document.createElement('div');
    const divbotones = document.createElement('div');

    divinfo.classList.add('info');

    divlista.classList.add('lista');
    divlista.classList.add('lista-usuario');

    divbotones.classList.add('botonesadmin');

    const nombre = document.createElement('h3');
    nombre.textContent = usuario.nombre;
    divinfo.append(nombre);
    const asignatura = document.createElement('p');
    asignatura.textContent = `Contraseña: ${usuario.contraseña}`;
    divinfo.append(asignatura);
    const correo = document.createElement('p');
    correo.textContent = `Correo: ${usuario.correo}`;
    divinfo.append(correo);
    const tlf = document.createElement('p');
    tlf.textContent = `Rol: ${usuario.rol}`;
    divinfo.append(tlf);
    const estado = document.createElement('p');
    estado.textContent = `Estado: ${usuario.estado}`;
    divinfo.append(estado);
    const fechaAlta = document.createElement('p');
    fechaAlta.textContent = `Fecha de alta: ${usuario.fechaAlta}`;
    divinfo.append(fechaAlta);
    const preferenciasAccesibilidad = document.createElement('p');
    preferenciasAccesibilidad.textContent = `Preferencias de accesibilidad: ${usuario.preferenciasAccesibilidad}`;
    divinfo.append(preferenciasAccesibilidad);

    const botonEditar = document.createElement('button');
    botonEditar.type = 'button';
    botonEditar.textContent = 'Editar';
    botonEditar.addEventListener('click', () => {
        window.location.href = 'editarperfil.html';
    });
    divbotones.append(botonEditar);

    const botonEliminar = document.createElement('button');
    botonEliminar.type = 'button';
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.addEventListener('click', () => {
        window.location.href = 'dardebaja.html';
    });
    divbotones.append(botonEliminar);

    divlista.append(divinfo, divbotones);
    elemento.append(divlista);
    //Añado cada cosa de html creada al elemento li y luego ese elemento lo añado al container

    usuarioContainer.append(elemento);

}