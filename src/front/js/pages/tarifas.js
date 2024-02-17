import React from "react";
import { Link } from "react-router-dom";
import imagenPesas from "../../img/IMG-0381.jpg";
import imagenPalo from "../../img/_MG_9080.jpg";
import imagenEscritura from "../../img/_MG_9162.jpg";
import "../../styles/tarifas.css";




export const Tarifas = () =>{
    const precios = [{
        title:"INDIVIDUAL",
        sesion:"(Sesión a 62€)",
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
        <section className="container-fluid container-tarifas">
            <div className="tarifas-texto">
                <h1 className="title-tarifas"><span className="title-1-tarifas">NUESTRAS</span><span className="title-2-tarifas"> TARIFAS</span></h1>
                <p className="text-tarifas">No solo ofrecemos opciones para facilitar el acceso a los servicios de neurorrehabilitación eliminando las barreras físicas y tecnológicas, también flexibilizamos las económicas. </p>
                <h3 className="title-tarifas">BONO POR ESPECIALIDAD</h3>
                <p className="text-tarifas">Contrata individualmente tus sesiones de fisioterapia, logopedia, neuropsicología o terapia ocupacional</p>
            </div>
            <div className="all-tarifas">
                <div className="row row-tarifas">
                {precios.map((precio,index)=>{
                    return(
                        <div key={index} className="card col-12 col-sm-6 col-xxl-3 gy-3 card-tarifas">
                            <div className="card-body card-bono-tarifas">
                                <h5 className="card-title bono-title-tarifas">{precio.title}</h5>
                                <p className="card-text bono-precio-tarifas">{precio.precio}</p>
                                <h6 className="card-text bono-sesion-tarifas">{precio.sesion}</h6>
                                <Link to="/contacto" className="btn btn-bono-tarifas">Saber más</Link>
                            </div>
                        </div>
                    )
                })}
                </div>
                <div className="row row-text-tarifas">
                    <div className="tarifas-texto2">
                        <h3 className="subtitle-tarifas">NEURORREHABILITACIÓN INTEGRAL</h3>
                        <div className="row row-tarifas2">
                            <div className="col-12 col-xl-6">
                                <p className="text-tarifas">Se establecerá un programa de tratamiento individualizado en base a una valoración inicial, en el que se combinen las sesiones de las especialidades necesarias en cada caso y con un presupuesto personalizado.<br/>
                                <Link className="link-text-tarifas" to="/contacto">Consulta tu caso</Link>
                                </p>
                                <h3 className="subtitle-tarifas">CHEQUE SERVICIO</h3>
                                <p className="text-tarifas">Utiliza tu cheque servicio de la comunidad de Madrid con nosotros. Se rige por los precios acordados con la comunidad y siempre cumpliendo el decálogo de derechos de los usuarios:<br/>
                                <Link className="link-text-tarifas" to="/derechos">Consúltalo aquí</Link>
                                 </p>
                                 <p className="text-tarifas">*Para zonas de servicio distintas a las referenciadas, se considerará un suplemento adicional.<br/>
                                    **Los bonos incluyen sesiones de tratamiento de 60 minutos, informes personalizados, acceso al portal del paciente, videoconsultas de seguimiento.<br/>
                                    ***Los bonos tienen una validez de 6 meses.
                                </p>
                            </div>
                            <div className="col-12 col-xl-6 all-carousel-tarifas">
                                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={imagenPalo} className="d-block img-carousel-tarifas" alt="..."/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={imagenPesas} className="d-block img-carousel-tarifas" alt="..."/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={imagenEscritura} className="d-block img-carousel-tarifas" alt="..."/>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}