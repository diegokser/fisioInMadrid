import React from "react";
import "../../styles/home.css";
import imagenCard from "../../img/IMG-0376.jpg";

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
                        <a className="card-links-home" href="tel:+34650369409">650369409</a>
                        <a className="card-links-home" href="mailto:consulta@fisioin.es">consulta@fisioin.es</a>
                        <a className="card-links-home" href="https://api.whatsapp.com/send/?phone=34650369409&text&type=phone_number&app_absent=0">WhatsApp <i className="fab fa-whatsapp"></i></a>
                    </h5>

                </div>
            </div>
        </div>
        <div className="col-12 col-lg-6 home-oferta">
            <h5 className="subtitle-bienvenida">BIENVENIDOS</h5>
            <p className="text-bienvenida">
            FISIOIN MADRID SL expertos en neurorrehabilitación a domicilio, nace para facilitar el acceso a los servicios de fisioterapia neurológica, logopedia, neuropsicología y terapia ocupacional, tanto a personas con limitaciones de movilidad como a personas que prefieran recibir su tratamiento en la comodidad de su hogar. 
            Contamos con un equipo multidisciplinar de profesionales especializados en rehabilitación neurológica para garantizar una atención integral personalizada y totalmente adaptada a las necesidades de cada paciente.
            </p>
        </div>
    </section>
    )

}