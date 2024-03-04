const {Schema, model} = require('mongoose')

//creacion del modelo del Schema de la api

const empleadoSchema = new Schema({
    nombre: String,
    apellido: String,
    tdocumento: String,
    ndocumento: String,
    correo: String,
    password: String,
    tcuenta: String,
    edad: String,
    telefono: Number,
    nconocimiento: String,
    notas: String
},
{
    timestamps: true

})

module.exports = model('Usuario', empleadoSchema )