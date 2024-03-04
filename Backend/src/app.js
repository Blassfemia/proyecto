const express = require('express')
const cors = require('cors')
const app = express();


//configuracion del puerto de conexion 

app.set('port', process.env.PORT || 4000)


//middlewares
app.use(cors())
app.use(express.json())


app.get('/', (req, res) =>{
    res.send('Bienvenido a mi api');
})

// Ruta para la creacion en la api

app.use('/api/usuarios', require('./routes/usuario'))

//Rutas







module.exports = app;
