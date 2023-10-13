const {Schema, model} = require('mongoose')

const valoracionesSchema = new Schema({
    "usuario" : String,
    "comentario" : String,
    "puntuacion" : Number
})

const valoraciones = model('Valoraciones',valoracionesSchema);

module.exports = valoraciones;