const {Schema, model} = require('mongoose');

const administradoresSchema = new Schema({
        "nombre" : String,
        "email" : String
})

const administradores = model('Administradores', administradoresSchema);

module.exports = administradores;