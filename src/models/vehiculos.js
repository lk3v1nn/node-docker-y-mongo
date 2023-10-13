const {Schema, model} = require('mongoose');

const vehiculosSchema = new Schema({
    "modelo" : String,
    "anio" : Number,
    "caracteristicas" : String,
    "precioPorDia" : Number,
    "fotos" : String
})

const vehiculos = model('Vehiculos',vehiculosSchema);

module.exports = vehiculos;
