const usuarioCtrl ={}

const Usuario = require('../models/Usuario')

//se realizan las peticiones a la api segun se declaro en el archivo ./routes/usuario

//metodo get, para realizar una busqueda de los usuarios
usuarioCtrl.getUsu = async(req, res) =>{
    const usuarios = await Usuario.find()
    res.json(usuarios)
}

//metodo post creacion de un nuevo usuario
usuarioCtrl.createUsu = async(req, res) =>{
    const {
        nombre, 
        apellido,
        tdocumento,
        ndocumento,
        correo,
        password,
        tcuenta,
        edad,
        telefono,
        nconocimiento,
        notas} = req.body;

    const newUsu = new Usuario({
        nombre: nombre, 
        apellido: apellido,
        tdocumento: tdocumento,
        ndocumento: ndocumento,
        correo: correo,
        password: password,
        tcuenta: tcuenta,
        edad: edad,
        telefono: telefono,
        nconocimiento: nconocimiento,
        notas: notas
    })

    await newUsu.save();
    res.json({message: 'Usuario Creado'})
    
}

//Metodo get para buscar un solo documento 
usuarioCtrl.getUsuario = async(req, res) =>{
    const usuario = await Usuario.findById(req.params.id)
    res.json(usuario)
    
}

//metodo Delete para eliminar un usuario encontrado por el id
usuarioCtrl.deleteUsu = async(req, res) =>{
    await Usuario.findByIdAndDelete(req.params.id)
    res.json({message: 'Se elimino el usuario'})
    
}


//metodo post para actualizar la informacion de un usuario 
usuarioCtrl.updateUsu = async(req, res) =>{
    const {
        nombre, 
        apellido,
        tdocumento,
        ndocumento,
        correo,
        password,
        tcuenta,
        edad,
        telefono,
        nconocimiento,
        notas} = req.body;

    await Usuario.findByIdAndUpdate(req.params.id,{

        nombre, 
        apellido,
        tdocumento,
        ndocumento,
        correo,
        password,
        tcuenta,
        edad,
        telefono,
        nconocimiento,
        notas

    })
    res.json({message: 'Usuario actualizado'})
}

module.exports = usuarioCtrl;