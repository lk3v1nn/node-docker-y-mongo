const { strict } = require('assert');
const {Schema, model} = require ('mongoose');

const reservacionesSchema = new Schema({
    "fechaInicio": String,
    "fechaFin": String,
    "ubicacion": String,
    "estado": Boolean,
    "usuario": String,
    "vehiculo" : String,
    "numero" : String
})

const reservaciones = model('reservaciones', reservacionesSchema);

module.exports = reservaciones;