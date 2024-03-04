import React from 'react'
import { Link } from 'react-router-dom'

const CrearPaquete = () => {
  return (
    <div className="col-md-6 offset-md-3 text-light">
      <div className="card card-body bg-black">
        <h1 className="text-center">CREACION DE PAQUETES</h1>
        
        <form >
          <h5 className="text-center">Seleccione tipo de paquete</h5>

          <div className="mb-3">
            <label>Nombre: </label>
            <input
              type="text"
              className="form-control"
              placeholder="Nombre"
              required
              
            />
          </div>

          <div className="mb-3">
            <label>Cantidad de Clases: </label>
            <input
              type="number"
              className="form-control"
              placeholder="Clases"
              required
              
            />
          </div>

          

          <div className="mb-3">
            <label>Costo Paquete: </label>
            <input
              type="number"
              className="form-control"
              placeholder="Valor del paquete"
              required
              id="ndocumento"
              
            />
          </div>

           
          <button className="btn btn-primary form-control">Crear Paquete</button>
          <button type="reset" className="btn btn-secundary form-control">Borrar todo</button>
          <button className="btn form-control"><Link className="nav-link active" to="/">Cancelar creación</Link></button>
        </form>

      </div>
    </div>
  )
}

export default CrearPaquete