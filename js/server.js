const express = require('express');
const mysqkl = require('mysql2');
const app = express();

//configura la base de datos 
const db = mysqkl.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'AWBBDD'
});

//por si da error
db.connect((err) => {
    if (err) {
        throw err;
        console.log('Error al conectar a la base de datos');
    }
    console.log('Conectado a la base de datos');
});

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});

//configura la base de datos XAMPP para usarlo pero no tengo ni idea de como usarlo en cada caso
//especifico

