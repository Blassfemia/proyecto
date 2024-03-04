import React from 'react'

const AgendaDiaria = () => {
  return (
    <div className='container-fluid'>
      <form >
      <div className='row'>
        <div className='col text-center'>
          <strong><h1>CLASES DEL DIA </h1></strong> 
        </div>
      </div>    
      <div className='row bg-dark text-light text-center'>
        <div className='col-2'>
          Añadir
        </div>
        <div className='col-2'>
          Lunes
        </div>
        <div className='col-2'>
          Martes
        </div>
        <div className='col-2'>
          Miercoles
        </div>
        <div className='col-2'>
          Jueves
        </div>
        <div className='col-2'>
          Viernes
        </div>
        
      </div>

      <div className='row text-dark text-center mt-4'>
        <div className='col-2 text-left'>
          <button className='btn btn-secundary form-control'>Clases</button>
        </div>
      </div>
      <div className='row text-dark text-center mt-4'>
        <div className='col-2 text-left'>
          <button className='btn btn-secundary form-control'>Profesor</button>
        </div>
      </div>
      <div className='row text-dark text-center mt-4'>
        <div className='col-2 text-left'>
          <button className='btn btn-secundary form-control'>Nadador</button>
        </div>
      </div>
      <div className='row text-dark text-center mt-4'>
        <div className='col-2 text-left'>
          <button className='btn btn-secundary form-control'>Clase</button>
        </div>
      </div>
      <div className='row text-dark text-center mt-4'>
        <div className='col-2 text-left'>
          <h5>Agendar</h5>
        </div>
      </div>
      <div className='row text-dark text-center mt-4'>
        <div className='col-2 text-left'>
          <button className='btn btn-secundary form-control'>Asignar</button>
        </div>
      </div>
      <div className='row text-dark text-center mt-4'>
        <div className='col-2 text-left'>
          <button className='btn btn-secundary form-control'>Modificar</button>
        </div>
      </div>
      <div className='row text-dark text-center mt-4'>
        <div className='col-2 text-left'>
          <button className='btn btn-secundary form-control'>Consultar</button>
        </div>
      </div>
      </form>
    </div>
  )
}

export default AgendaDiaria