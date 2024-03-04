const {Schema, model} = require('mongoose')

//creacion del modelo del Schema de la api

const paqueteSchema = new Schema({
    nombre: String,
    cclases: Number,
    valor: Number

},
{
    timestamps: true

})

module.exports = model('Paquete', paqueteSchema )