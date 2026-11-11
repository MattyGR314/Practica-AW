const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm_password');
const form = document.querySelector('#formregistro');

if (!form) {
    console.error('No se encontró el formulario #formregistro');
} else {
    form.addEventListener('submit', (event) => {
        const nameInput = form.querySelector('[name="name"]');
        const lastNameInput = form.querySelector('[name="last_name"]');

        if (!emailInput || !passwordInput || !confirmPasswordInput || !nameInput || !lastNameInput) {
            event.preventDefault();
            console.error('No se encontraron los campos de entrada requeridos.');
            return;
        }

        if (!Array.isArray(window.usuarios)) {
            event.preventDefault();
            console.error('No se encontró la lista de usuarios.');
            return;
        }

        if (passwordInput.value !== confirmPasswordInput.value) {
            event.preventDefault();
            alert('Las contraseñas no coinciden. Por favor, inténtelo de nuevo.');
            return;
        }

        event.preventDefault();
        /*window.usuarios.push({
            id: window.usuarios.length,
            nombre: `${nameInput.value.trim()} ${lastNameInput.value.trim()}`,
            contraseña: passwordInput.value,
            correo: emailInput.value,
            rol: 'Estudiante',
            estado: 'Activo',
            fechaAlta: new Date().toISOString().slice(0, 10),
            preferenciasAccesibilidad: '-'
        });*/
        alert('Registro exitoso.');
    });
}

