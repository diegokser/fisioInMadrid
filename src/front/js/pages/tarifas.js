import React from "react";
import { Link } from "react-router-dom";
import imagenPesas from "../../img/IMG-0381.jpg";
import imagenPalo from "../../img/_MG_9080.jpg";
import imagenEscritura from "../../img/_MG_9162.jpg";
import "../../styles/tarifas.css";




export const Tarifas = () =>{
    const precios = [{
        title:"INDIVIDUAL",
        sesion:"1 sesión",
        precio:"62€"
    },
    {
        title:"BONO 5",
        sesion:"(Sesión a 56€)",
        precio:"280€"
    },{
        title:"BONO 10",
        sesion:"(Sesión a 53€)",
        precio:"530€"
    },{
        title:"BONO 15",
        sesion:"(Sesión a 50€)",
        precio:"750€"
    }]

    return(
        <div className="container-fluid container-tarifas">
            <div className="tarifas-texto">
                <h1 className="title-tarifas">NUESTRAS TARIFAS</h1>
                <p className="text-tarifas">No solo ofrecemos opciones para facilitar el acceso a los servicios de neurorrehabilitación eliminando las barreras físicas y tecnológicas, también flexibilizamos las económicas. </p>
                <h3 className="subtitle-tarifas">BONO POR ESPECIALIDAD</h3>
                <p className="text-tarifas">Contrata individualmente tus sesiones de fisioterapia, logopedia, neuropsicología o terapia ocupacional</p>
            </div>
            <div className="all-tarifas">
                <div className="row row-tarifas">
                {precios.map((precio,index)=>{
                    return(
                        <div className="card col-12 col-md-6 col-xxl-3 gy-3 card-tarifas">
                            <div className="card-body card-bono-tarifas" key={index}>
                                <h5 className="card-title bono-title-tarifas">{precio.title}</h5>
                                <p className="card-text bono-precio-tarifas">{precio.precio}</p>
                                <h6 className="card-text bono-sesion-tarifas">{precio.sesion}</h6>
                                <Link to="/contacto" className="btn btn-bono-tarifas">Saber más</Link>
                            </div>
                        </div>
                    )
                })}
                    <div className="tarifas-texto2">
                        <h3 className="subtitle-tarifas">NEURORREHABILITACIÓN INTEGRAL</h3>
                        <div className="row row-tarifas2">
                            <div className="col-12 col-xl-6">
                                <p className="text-tarifas">Se establecerá un programa de tratamiento individualizado en base a una valoración inicial, en el que se combinen las sesiones de las especialidades necesarias en cada caso y con un presupuesto personalizado.<br/>
                                <Link className="link-text-tarifas" to="/contacto">CONSULTA TU CASO</Link>
                                </p>
                                <p className="text-tarifas">*Para zonas de servicio distintas a las referenciadas, se considerará un suplemento adicional.<br/>
                                    **Los bonos incluyen sesiones de tratamiento de 60 minutos, informes personalizados, acceso al portal del paciente, videoconsultas de seguimiento.<br/>
                                    ***Los bonos tienen una validez de 6 meses.
                                </p>
                                <p className="text-tarifas">Defendemos el decálogo de los derechos de los usuarios:<br/>
                                <Link className="link-text-tarifas" to="/derechos">Consúltalo aquí</Link>
                                 </p>
                            </div>
                            <div className="col-12 col-xl-6 all-carousel-tarifas">
                                <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src={imagenPalo} class="d-block img-carousel-tarifas" alt="..."/>
                                    </div>
                                    <div class="carousel-item">
                                        <img src={imagenPesas} class="d-block img-carousel-tarifas" alt="..."/>
                                    </div>
                                    <div class="carousel-item">
                                        <img src={imagenEscritura} class="d-block img-carousel-tarifas" alt="..."/>
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}