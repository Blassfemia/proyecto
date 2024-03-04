import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

const ListaUsuario = () => {

  const [lista, setLista] = useState([]);

  useEffect(() => {
    const getUsuario = async () => {
      const res = await axios.get("http://localhost:4000/api/usuarios");
      setLista(res.data);
    };
    getUsuario();
  }, [lista]);

  const eliminarUsuario = async(id)=>{
    await axios.delete('http://localhost:4000/api/usuarios/' + id)
  }
  

  return (
    <div className="row">
      {lista.map((list) => (
        <div className="col-md-4 p-2" key={list._id}>
          <div className="card">
            <div className="card-header">
              <h5 className="text-center">Usuario </h5>
            </div>

            <div className="card-body">
              <p>Nombre: {list.nombre} </p>
              <p>Apellido: {list.apellido} </p>
              <p>Tipo de Documento: {list.tdocumento} </p>
              <p>Numero de Documento: {list.ndocumento} </p>
              <p>Correo: {list.correo} </p>
              <p>Password: {list.password} </p>
              <p>Tipo de Cuenta: {list.tcuenta} </p>
              <p>Edad: {list.edad} </p>
              <p>Telefono de Contacto: {list.telefono} </p>
              <p>Nivel: {list.nconocimiento} </p>
              <p>Notas: {list.notas} </p>
            </div>

            <div className="card-footer">
              <button
                className="btn btn-danger form-control"
                onClick={() => eliminarUsuario(list._id)}
              >
                Eliminar
              </button>

              <Link className="btn btn-secunday form-control" to={"/editUser/" + list._id} >
                Editar
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListaUsuario;
