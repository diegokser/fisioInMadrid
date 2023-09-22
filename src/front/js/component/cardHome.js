import React from "react";
import "../../styles/home.css";
import imagenCard from "../../img/IMG-0376.jpg";
import { Link } from "react-router-dom";

export const CardHome  = () =>{
    return(
    <section className="container-fluid row card-info-home">
        <div className="col-12 col-lg-6 home-info">
            <div className="card border-0">
                <img src={imagenCard} className="card-img-top img-1-home" alt="imagen masaje"/>
                <div className="card-body card-home-text">
                    <h5 className="card-text card-text-info">
                        ABIERTOS A ESCUCHARTE <br/>
                        Horario: L - V 9 am - 9pm <br/>
                        <Link className="card-links-home" to="/contacto">650369409</Link>
                        <a className="card-links-home" href="mailto:consulta@fisioin.es">consulta@fisioin.es</a>
                        <a className="card-links-home" href="https://api.whatsapp.com/send/?phone=34650369409&text&type=phone_number&app_absent=0">Whatsapp <i className="fab fa-whatsapp"></i></a>
                    </h5>

                </div>
            </div>
        </div>
        <div className="col-12 col-lg-6 home-oferta">
            <h5 className="title-bienvenida">VUELVE A SENTIR LA VIDA QUE TE GUSTA</h5>
            <h5 className="subtitle-bienvenida">Bienvenidos</h5>
            <p className="text-bienvenida">
            FISIOIN MADRID SL expertos en neurorrehabilitación a domicilio, nace para facilitar el acceso a los servicios de fisioterapia neurológica, logopedia, neuropsicología y terapia ocupaciones, tanto a personas con limitaciones de movilidad como a personas que prefieran recibir su tratamiento en la comodidad de su hogar. 
            Contamos con un equipo multidisciplinar de profesionales especializados en rehabilitación neurológica para garantizar una atención integral personalizada y totalmente adaptada a las necesidades de cada paciente.
            </p>
        </div>
    </section>
    )

}