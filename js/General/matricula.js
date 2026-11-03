const form = document.querySelector('#formmatricula');
const courseInput = document.querySelector('#courseinp');

if(!form) {
    console.error('No se encontró el formulario #formmatricula');
}
else{
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente
        if(!validarCurso()) {
            alert('El curso no existe. Por favor, ingrese un curso válido.');
        }
    });
}


function validarCurso() {
    if(!courseInput) {
        console.error('No se encontró el campo de entrada del curso.');
        return false;   
    }
    else{
        for (const curso of window.cursos) {
            nombremin = curso.nombre.toLowerCase();
            courseInputmin = courseInput.value.toLowerCase();
            if (nombremin === courseInputmin) {       //ESTO ES SUPER POCO OPTIMO
                return true; // El curso existe
            }
        }
        return false; // El curso no existe
    }
}