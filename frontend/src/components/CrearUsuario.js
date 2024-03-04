import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from 'axios';


const CrearUsuario = () => {

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



const [usuario, setUsuario] = useState(valorInicial);


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



  return (
    <div className="col-md-6 offset-md-3 text-light">
      <div className="card card-body bg-black">
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
              name="password"
              value={usuario.password}
              onChange={capturarDatos}
            />
          </div>
          
          <label className="mb-3">
            {" "}
            Tipo de Cuenta
            <select className="text-center m-2" 
              name="tcuenta"
              value={usuario.tcuenta}
              onChange={capturarDatos}>
              <option value="">(Selecciona uno)</option>
              <option value="Administrativo">Administrativo</option>
              <option value="Profesor">Profesor</option>
              <option value="Nadador">Nadador</option>
            </select>
          </label>

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
          

          <label className="mb-3">
            {" "}
            Nivel de conocimiento
            <select className="text-center m-2" 
              name="nconocimiento"
              value={usuario.nconocimiento}
              onChange={capturarDatos}>
              <option value="">(Selecciona uno)</option>
              <option value="Dragon amarillo">Dragon amarillo</option>
              <option value="Dragon naranja">Dragon naranja</option>
              <option value="Dragon rojo">Dragon rojo</option>
              <option value="Dragon verde">Dragon verde</option>
              <option value="Dragon azul">Dragon azul</option>
            </select>
          </label>

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
          
          

          <button className="btn btn-primary form-control">Crear usuario</button>
          <button type="reset" className="btn btn-secundary form-control">Borrar todo</button>
          <button className="btn form-control"><Link className="nav-link active" to="/">Cancelar creación</Link></button>
        </form>

      </div>
    </div>
  );
};

export default CrearUsuario;
