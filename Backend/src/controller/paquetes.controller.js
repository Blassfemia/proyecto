const paqueteCtrl = {}


//solicita informacion de models/paquetes
const Paquete = require ('../models/Paquetes')


//creacion del metodo get

paqueteCtrl.getPaq = async(req,res)=>{
    const paqueteget = await Paquete.find()
    res.json(paqueteget)
}


//creacion del metodo create 

paqueteCtrl.createPaq = async(req,res)=>{
    const{
        nombre,
        cclases,
        valor
    }= req.body;

    const newPaq = new Paquete({
        nombre: nombre,
        cclases: cclases,
        valor:valor
    })

    await newPaq.save();
    res.json({message: "Paquete creado"})
}

//metodo get find un solo documento 

paqueteCtrl.getpaquete = async(req, res)=>{
    const paquete = await Paquete.findById(req.params.id)
    res.json(paquete)
}

//metodo delete 

paqueteCtrl.deletePaq = async(req, res)=>{
    await Paquete.findByIdAndDelete(req.params.id)
    res.json({message: 'Paquete eliminado'})
}

module.exports = paqueteCtrl();