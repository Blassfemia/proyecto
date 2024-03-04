import React from "react";
import { Link } from "react-router-dom";

const PaginaPrincipal = () => {
  return (
    <div className="container-fluid">
      <div className="row bg-black m-2">
        <div className="col-12">
          <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="./img/carrusel1.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="./img/carrusel2.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="./img/carrusel4.jpeg"
                  className="d-block w-100 "
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="./img/carrusel3.jpg"
                  className="d-block w-100 "
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      <h2 className="text-center bg-black mt-4 text-light">NUESTROS SERVICIOS</h2>
      <div>
        <div class="accordion mt-4" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                Natacion Recreativa un estilo optimo de aprendizaje
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show text-center"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                El <strong>Club Dragones Marinos </strong> establece una
                dinamica dierente en la natacion, permitiendo que atravez del
                juego y actividades especificas los niños y niñas puedan
                adquirir habilidades acuaticas{" "}
                <strong>con mayor facilidad</strong>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Natacion para Bebes - un bebe seguro son padres felices
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse text-center"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Con <strong>Certificacion internacional</strong> para la
                enseñanza en bebes, damos la opcion que los padres puedan
                sentirse seguros, sabiendo que sus bebes en cualquier medio
                acuatico estaran a salvo, se brindan clases de exelente calidad
                logrando estos objetivos
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Natacion infantil - medios acuaticos la mejor eleccion
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                A partir de los 3 años brindamos
                <strong>clases de habilidades acuaticas</strong> para que los
                niños y niñas siempre esten felices en un medio acuatico
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour" >
                Semillero - Equipo competitivo
              </button>
            </h2>
            <div
              id="collapseFour"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Inicio en el mundo de la
                <strong>competicion de natacion Carreras</strong> brindando
                acondicionamiento y mejoramiento en las tecnicas de nado,
                nadador@s desde los 8 años, los cuales puedan manejar los 4
                estilos de la natacion.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                Equipo competitivo - preparandonos para la seleccion
              </button>
            </h2>
            <div
              id="collapseFive"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Inicio en el mundo de la{" "}
                <strong>competicion de natacion Carreras</strong> con mayor
                enfoque en adquisicion de habilidades especificas e iniciando en
                las competencias oficiales de la liga vallecaucana de natacion,
                con el enfoque primario de conseguir un cupo en la seleccion
                valle
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center bg-dark text-light mt-4">
        <div>
        <Link className="nav-link active" to="https://www.instagram.com/club_dragones_marinos/"> Instagram </Link>
        </div>
        <div>
        <Link className="nav-link active" to="https://www.facebook.com/people/Club-de-Nataci%C3%B3n-Dragones-Marinos/100085682863164/"> Facebook </Link>
        
        </div>
        <div>
        <Link className="nav-link active" to="#"> Whatsapp </Link>
        
        </div>
        <div>
        <Link className="nav-link active" to="#"> Correo </Link>
        
        </div>        
      </div>
    </div>
  );
};

export default PaginaPrincipal;
