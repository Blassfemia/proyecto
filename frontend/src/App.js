
import './App.css';
import { Routes, Route } from "react-router-dom";

import  Navegacion  from "./components/Navegacion";
import CrearUsuario from './components/CrearUsuario';
import ListaUsuario from './components/ListaUsuario';
import PaginaPrincipal from './components/PaginaPrincipal';
import AgendaDiaria from './components/AgendaDiaria';
import EstadoPaquete from './components/Nadadores/EstadoPaquete';
import Historial from './components/Nadadores/Historial';
import Asistencia from './components/Nadadores/Asistencia';
import Objetivos from './components/Nadadores/Objetivos';
import AnadirPaquete from './components/Nadadores/Anadirpaquete';
import CrearPaquete from './components/Paquetes/CrearPaquete';
import PerfilProfesor from "./components/Profesor/PerfilProfesor";
import Calificaciones from './components/Profesor/Calificaciones';
import InicioSesion from './components/Usuarios/InicioSesion';
import EditUsu from './components/EditUsu';

function App() {
  return (
    <div className="">
      <Navegacion/>
      <div className='container p-4'>
        <Routes>
          <Route path='/' element={<PaginaPrincipal/>} />

          <Route path='/AgendaDiaria' element={<AgendaDiaria/>} />

          <Route path='/Nadadores/EstadoPaquete' element={<EstadoPaquete/>} />
          <Route path='/Nadadores/Historial' element={<Historial/>} />
          <Route path='/Nadadores/Asistencia' element={<Asistencia/>} />
          <Route path='/Nadadores/Objetivos' element={<Objetivos/>} />
          <Route path='/Nadadores/AñadirPaquete' element={<AnadirPaquete/>} />

          <Route path='/Paquetes/CrearPaquete' element={<CrearPaquete/>} />
          <Route path='/Paquetes/Añadirpaquete' element={<AnadirPaquete/>} />
          <Route path='/editPaquete/:id' element={<CrearPaquete/>} />

          <Route path='/Profesor/PerfilProfesor' element={<PerfilProfesor/>} />
          <Route path='/Profesor/Calificaciones' element={<Calificaciones/>} />

          <Route path='/Usuarios/InicioSesion' element={<InicioSesion/>} />
             
          <Route path='/ListaUsuario' element={<ListaUsuario/>} />
          <Route path='/CrearUsuario' element={<CrearUsuario/>} />
          <Route path='/PaginaPrincipal' element={<PaginaPrincipal/>} />
          <Route path='/editUser/:id' element={<EditUsu/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
