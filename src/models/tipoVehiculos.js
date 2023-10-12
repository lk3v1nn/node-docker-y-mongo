const {Schema, model} = require('mongoose');

const tipoVehiculosSchema = new Schema({
    "nombre" : String,
    "descripcion" : String
})

const tipoVehiculos = model('tipoVehiculos', tipoVehiculosSchema);

module.exports = tipoVehiculos;