import React from 'react';
import { Link } from 'react-router-dom';




const InicioSesion = () => {

  





  return (
    <div className='col-md-5 offset-md-4 bg-dark text-light '>
      <div className='container'>
        <form>
          <h3 className='text-center m-3 p-2 '>INICIO DE SESION</h3>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" required/>
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />            
            <label className="form-check-label" htmlFor="exampleCheck1">Recuerdame</label>
            <Link className="nav-link m-2" to="/CrearUsuario"><p> Registrarse </p></Link>
          </div >
          <button type="submit" className="btn btn-primary mb-2 form-control">Iniciar</button>
          <button type="submit" className="btn btn-primary mb-2 form-control">Cancelar</button>
        </form>

      </div>
    </div>
  )
}

export default InicioSesion