import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from 'axios';


const EditUsu = () => {

  //valor inicial 
const valorInicial = {
  nombre: "", 
  apellido: "",
  tdocumento: "",
  ndocumento: "",
  correo: "",
  password: "",
  tcuenta: "",
  edad: "0",
  telefono: "",
  nconocimiento: "",
  notas: ""
}

let {id} = useParams();

const [usuario, setUsuario] = useState(valorInicial);
const [subId, setSubId] = useState(id);




const capturarDatos = (e)=>{
  const {name, value} = e.target
  setUsuario({...usuario, [name]:value})
}

const guardarDatos = async(e) =>{
  e.preventDefault();
  

  //Creando la logica para la funcion post.

  const newUser = {
    nombre: usuario.nombre,
    apellido: usuario.apellido,
    tdocumento: usuario.tdocumento,
    ndocumento: usuario.ndocumento,
    correo: usuario.correo,
    password: usuario.password,
    tcuenta: usuario.tcuenta,
    edad: usuario.edad,
    telefono: usuario.telefono,
    nconocimiento: usuario.nconocimiento,
    notas: usuario.notas

  }

  await axios.post('http://localhost:4000/api/usuarios', newUser)

  setUsuario({...valorInicial})
}


//logica actualizar datos del usuario peticion put

const actualizarUser = async(e)=>{
  e.preventDefault(); 
  const updateUser = {
    nombre: usuario.nombre,
    apellido: usuario.apellido,
    tdocumento: usuario.tdocumento,
    ndocumento: usuario.ndocumento,
    correo: usuario.correo,
    password: usuario.password,
    tcuenta: usuario.tcuenta,
    edad: usuario.edad,
    telefono: usuario.telefono,
    nconocimiento: usuario.nconocimiento,
    notas: usuario.notas

  }
  await axios.put('http://localhost:4000/api/usuarios/'+ subId, updateUser)
  setUsuario({...valorInicial})
  setSubId('')
}

//logica para solicitar a la api un documento 

const obtUno = async(valorId)=>{
  const res = await axios.get('http://localhost:4000/api/usuarios/' + valorId)
  setUsuario({
    nombre: res.data.nombre,
    apellido: res.data.apellido,
    tdocumento: res.data.tdocumento,
    ndocumento: res.data.ndocumento,
    correo: res.data.correo,
    password: res.data.password,
    tcuenta: res.data.tcuenta,
    edad: res.data.edad,
    telefono: res.data.telefono,
    nconocimiento: res.data.nconocimiento,
    notas: res.data.notas
  })
}


//traer la informacion de lista de usuario
useEffect(()=>{
  if (subId !== "") {
    obtUno (subId)    
  }
},[subId]);



  return (
    <div className="col-md-6 offset-md-3">
      <div className="card card-body">
        <h1 className="text-center">FORMULARIO DE REGISTRO</h1>
        <p className="text-center">Ingrese la informacion necesaria * </p>
        <form onSubmit={guardarDatos}>
          <h3 className="text-center">Creacion de Usuario</h3>

          <div className="mb-3">
            <label>Nombre: </label>
            <input
              type="text"
              className="form-control"
              placeholder="Nombre"
              required
              name="nombre"
              value={usuario.nombre}
              onChange={capturarDatos}
            />
          </div>

          <div className="mb-3">
            <label>Apellido: </label>
            <input
              type="text"
              className="form-control"
              placeholder="Apellido"
              required
              name="apellido"
              value={usuario.apellido}
              onChange={capturarDatos}
            />
          </div>

          <label className="mb-3">
            {" "}
            Tipo de Documento
            <select className="text-center m-2" 
              name="tdocumento"
              value={usuario.tdocumento}
              onChange={capturarDatos}>
              <option value="">(Selecciona uno)</option>
              <option value="Cedula de Ciudadania">Cedula Ciudadania</option>
              <option value="Tarjeta de Identidad">Tarjeta de identidad</option>
              <option value="Pasaporte">Pasaporte</option>
            </select>
          </label>

          <div className="mb-3">
            <label>Documento: </label>
            <input
              type="text"
              className="form-control"
              placeholder="Documento"
              required
              id="ndocumento"
              name="ndocumento"
              value={usuario.ndocumento}
              onChange={capturarDatos}
            />
          </div>

          <div className="mb-3">
            <label>Correo: </label>
            <input
              type="email"
              className="form-control"
              placeholder="Correo"
              required
              name="correo"
              value={usuario.correo}
              onChange={capturarDatos}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              required
              name="password"
              value={usuario.password}
              onChange={capturarDatos}
            />
          </div>
          
          <div className="mb-3 text-center">
            <legend className="text-center mb-3">Tipo de cuenta (requerido)</legend>
            <label className="m-3" for="cuenta_profesor">
              <input
                id="cuenta_profesor"
                type="radio"
                name="tipo_cuenta"
                className="inline"                  
                value={usuario.tcuenta}     
                onChange={capturarDatos}         
              />{" "}
              Profesor
            </label>
            <label className="m-3" for="cuenta_admon">
              <input
                id="cuenta_admon"
                type="radio"
                name="tipo_cuenta"
                className="inline"                
                value={usuario.tcuenta}
                onChange={capturarDatos}
              />{" "}
              Administrativo
            </label>
            <label className="m-3" htmlFor="cuenta_nadador">
              <input
                id="cuenta_nadador"
                type="radio"
                name="tipo_cuenta"
                className="inline"
                value={usuario.tcuenta}
                onChange={capturarDatos}
              />{" "}
              Nadador
            </label>
          </div>

          <div className="mb-3">
            <label for="edad"></label>
            Edad (Años):{" "}
            <input
              id="edad"
              type="number"
              name="edad"
              min="1"
              max="120"
              className="form-control"              
              value={usuario.edad}
              onChange={capturarDatos}
            />
          </div>

          <div className="mb-3">
            <label for="telefono">Telefono: </label>
            <input
              id="telefono"
              type="tel"
              name="telefono"
              className="form-control"
              value={usuario.telefono}
              onChange={capturarDatos}
            />
          </div>

          <div className="mb-3">
            <label for="referrer">
              Nivel de conocimiento
              <select id="nivelConocimiento" name="nivelConocimiento" className="text-center m-3" >
                <option value={usuario.nconocimiento} onChange={capturarDatos} >(selecciona uno)</option>
                <option value={usuario.nconocimiento} onChange={capturarDatos}>Dragon amarillo</option>
                <option value={usuario.nconocimiento} onChange={capturarDatos}>Dragon naranja</option>
                <option value={usuario.nconocimiento} onChange={capturarDatos}>Dragon rojo</option>
                <option value={usuario.nconocimiento} onChange={capturarDatos}>Dragon verde</option>
                <option value={usuario.nconocimiento} onChange={capturarDatos}>Dragon azul</option>
              </select>
            </label>
          </div>

          <div className="mb-3">
            <label className="text-center">
              Notas adicionales:
            </label>
            <textarea
              id="notas"
              name="notas"
              rows="3"
              cols="60"
              placeholder="Indique informacion adicional..."
              className="form-control"
              value={usuario.notas}
              onChange={capturarDatos}
            ></textarea>
          </div>
          
          <button className="btn form-control"><Link className="nav-link active" to="/">Cancelar</Link></button>
        </form>

        <form onSubmit={actualizarUser}>
          <button className="btn btn-danger form-control mt-2">
             Actualizar            
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUsu;
