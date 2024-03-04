const {Router} = require('express')
const router = Router()

//Asignar las peticiones segun la ruta de la api

const {getPaq,createPaq,getPaquete,deletePaq} = require ('../controller/paquetes.controller')

router.route('/paq')
    .get(getPaq)
    .post(createPaq)

router.route('/paq/:id')
    .get(getPaquete)
    .delete(deletePaq)
    
module.exports = router;