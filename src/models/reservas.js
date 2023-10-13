const {Schema, model} = require ('mongoose');

const reservaSchema = new Schema({
    "fechaInicio": String,
    "fechaFin": String,
    "ubicacion": String,
    "estado": Boolean
})

const reservas = model('Reservas', reservaSchema);

module.exports = reservas;