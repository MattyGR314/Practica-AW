const aulaContainer = document.querySelector('#listaaulas');

if (!aulaContainer) {
    console.error('No se encontró el contenedor #lista-aulas.');
} else if (!window.aulas) {
    console.error('No se encontraron datos de aulas.');
} else {
    window.aulas.forEach(mostrarAulaEnLista);   //hace el metodo sobre el array creado en aulas.js
}

function mostrarAulaEnLista(aula) {
    const elemento = document.createElement('li');  //Crea los elementos de html desde document
    const divlista = document.createElement('div');
    const divbotones = document.createElement('div');

    divbotones.classList.add('botonesadmin');

    divlista.classList.add('lista');
    divlista.classList.add('lista-usuario');

    const id = document.createElement('h3');
    id.textContent = `Id: ${aula.id}`;
    divlista.append(id);
    const nombre = document.createElement('h3');
    nombre.textContent = aula.nombre;
    divlista.append(nombre);
    const ubi = document.createElement('p');
    ubi.textContent = `Ubicación: ${aula.ubicacion}`;
    divlista.append(ubi);
    const cap = document.createElement('p');
    cap.textContent = `Capacidad: ${aula.capacidad}`;
    divlista.append(cap);
    const equip = document.createElement('p');
    equip.textContent = `Equipamiento: ${aula.equipamiento.join(', ')}`;
    divlista.append(equip);
    const estado = document.createElement('p');
    estado.textContent = `Estado: ${aula.estado}`;
    divlista.append(estado);

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

    aulaContainer.append(elemento);
}