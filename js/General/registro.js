const submitButton = document.querySelector('#submitbt');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm_password');
const form = document.querySelector('#formregistro');

if (!form) {
    console.error('No se encontró el formulario #formregistro');
} else{
    form.addEventListener('submit', (event) => {
    //enviar a bbdd
    if(!emailInput || !passwordInput || !confirmPasswordInput) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente
        console.error('No se encontraron los campos de entrada requeridos.');
        return;
    } else if (passwordInput.value !== confirmPasswordInput.value) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente
        alert('Las contraseñas no coinciden. Por favor, inténtelo de nuevo.');
        return;
    } else {
        event.preventDefault(); //esto de momento hasta que tengamos el procesar.php
        alert('Registro exitoso.');
        return;
    }
});
}


