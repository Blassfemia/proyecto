const {Router} = require('express')
const router = Router()

//Asignar las peticiones segun la ruta de la api

const {getUsu,createUsu,deleteUsu,updateUsu,getUsuario} = require ('../controller/usuario.controller')

router.route('/')
    .get(getUsu)
    .post(createUsu)

router.route('/:id')
    .get(getUsuario)
    .delete(deleteUsu)
    .put(updateUsu)

module.exports = router;