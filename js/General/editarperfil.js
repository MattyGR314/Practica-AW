const submitButton = document.querySelector('#submit');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');
const form = document.querySelector('#formeditarperfil');

if (!form) {
    console.error('No se encontró el formulario #formeditarperfil');
} else{
    form.addEventListener('submit', (event) => {

        if(!emailInput || !passwordInput || !confirmPasswordInput) {
            event.preventDefault(); // Evita que el formulario se envíe automáticamente
            console.error('No se encontraron los campos de entrada requeridos.');
            return;
        } else if (emailInput.value.includes('@') === false) { //Falta aqui que la contraseña y el usuario coincidan
            event.preventDefault(); // Evita que el formulario se envíe automáticamente
            alert('El correo o la contraseña son incorrectos.');
            return;
        } else if (passwordInput.value !== confirmPasswordInput.value) {
            event.preventDefault(); // Evita que el formulario se envíe automáticamente
            alert('Las contraseñas no coinciden. Por favor, inténtelo de nuevo.');
            return;
        } else {
            event.preventDefault(); // hastsa q tengamos el procesar.php
            alert('Perfil editado correctamente.');
            return;
        }

        //falta comprobar que la contraseña no es la misma que la ya existente
        
    });
}
