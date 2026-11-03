const aulaContainer = document.querySelector('#lista-aulas');

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

    divlista.classList.add('lista');

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
    elemento.append(divlista);
    //Añado cada cosa de html creada al elemento li y luego ese elemento lo añado al container

    aulaContainer.append(elemento);
}