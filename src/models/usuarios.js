const {Schema, model} = require("mongoose");

const usuarioSchema = new Schema ({
    "nombre": String,
    "email": String,
    "telefono": String,
    "clave" : String
});

const usuarios = model('Usuarios', usuarioSchema);

module.exports = usuarios;