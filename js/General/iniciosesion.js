const submitButton = document.querySelector('#submit');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const form = document.querySelector('#forminiciosesion');

if (!form) {
    console.error('No se encontró el formulario #forminiciosesion');
} else{
    form.addEventListener('submit', (event) => {
        

        if(!emailInput || !passwordInput) {
            event.preventDefault(); // Evita que el formulario se envíe automáticamente
            console.error('No se encontraron los campos de entrada requeridos.');
            return;
        } else if (emailInput.value.includes('@') === false) { //Falta aqui que la contraseña y el usuario coincidan
            event.preventDefault(); // Evita que el formulario se envíe automáticamente
            alert('El correo o la contraseña son incorrectos.');
            return;
        } else {
            event.preventDefault(); // hastsa q tengamos el procesar.php
            alert('Ingreso exitoso.');
            return;
        }
        
    });
}

