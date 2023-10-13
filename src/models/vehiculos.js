const {Schema, model} = require('mongoose');

const vehiculosSchema = new Schema({
    "tipo": String,
    "marca" : String,
    "modelo" : String,
    "anio" : Number,
    "caracteristicas" : String,
    "precioPorDia" : Number,
    "fotos" : String,
    "placa" : String
})

const vehiculos = model('Vehiculos',vehiculosSchema);

module.exports = vehiculos;
