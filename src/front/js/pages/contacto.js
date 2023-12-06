import React from "react";
import "../../styles/contacto.css";
import imagenLogo from "../../img/Mano.png";



export const Contacto = () => {
    return(
        <section className="container-fluid container-contacto">
            <h1 className="title-contacto">CONTÁCTANOS <img className="imagen-logo-contacto"src={imagenLogo} alt="Logo de la empresa"/></h1>
            <p className="text-contacto">Si tienes alguna duda o necesitas más información nuestro horario de atención es de <span className="contacto-horario">L - V 9 am - 9pm</span></p>
            <div className="row row-contacto">
                <div className="card card-contacto col-12 col-md-5">
                    <div className="row">
                        <i className="col-2 far fa-envelope icono-email"></i>
                        <p className="col-9 card-title text-contacto">Puedes enviarnos un email a: <a className="link-contacto" href="mailto:consulta@fisioin.es">consulta@fisioin.es</a></p>
                    </div>
                </div>
                <div className="card card-contacto col-12 col-md-5">
                    <div className="row">
                        <i className="col-2 fab fa-whatsapp icono-whatsapp"></i>
                        <p className="card-text col-9 text-contacto">Llamarnos o escribirnos por whatsapp: <a className="link-contacto" href="https://api.whatsapp.com/send/?phone=34650369409&text&type=phone_number&app_absent=0">650369409</a></p>
                    </div>
                </div>
            </div>
        </section>
    )
}