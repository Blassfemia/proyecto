import React from "react";
import { Link } from "react-router-dom";

const Navegacion = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/PaginaPrincipal">
            Inicio
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/AgendaDiaria">
                  Agenda Diaria
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Registro
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/CrearUsuario">
                      Nuevo Usuario
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/ListaUsuario">
                      Lista de Usuario
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Nadador
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/Nadadores/EstadoPaquete">
                      Paquete
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Nadadores/Historial">
                      Historial
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Nadadores/Asistencia">
                      Asistencia
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Nadadores/Objetivos">
                      Objetivos
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Nadadores/AñadirPaquete">
                      Añadir Paquete
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Paquetes
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/Paquetes/CrearPaquete">
                      Crear nuevo paquete
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/edit/:id">
                      Modificar paquete
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Paquetes/Añadirpaquete">
                      Asignar paquete
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Profesor
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/Nadadores/Asistencia">
                      Asistencia
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Profesor/PerfilProfesor">
                      Perfil
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Profesor/Calificaciones">
                      Evaluacion
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Agenda
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="#">
                      Crear nuevo Horario
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Proximamente
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      En construccion
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Usuario
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/Usuarios/InicioSesion">
                      Iniciar Sesion
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Cerrar Sesion
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Editar
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navegacion;
