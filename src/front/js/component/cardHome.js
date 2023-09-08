import React from "react";
import "../../styles/home.css";
import imagenCard from "../../img/IMG-0376.jpg";
import imagenOferta from "../../img/IMG-0557.jpg";
import { Link } from "react-router-dom";

export const CardHome  = () =>{
    return(
    <div className="container-fluid row card-info-home">
        <div className="col-12 col-lg-6 home-info">
            <div className="card border-0">
                <img src={imagenCard} className="card-img-top img-1-home" alt="imagen masaje"/>
                <div className="card-body card-home-text">
                    <p className="card-text card-text-info">
                        ABIERTOS A ESCUCHARTE <br/>
                        Horario de atención telefónica: <br/>
                        L - V 9 am - 9pm <br/>
                        <Link className="card-links-home" to="/contacto">650369409</Link><br/>
                        Atención en linea 24/7<br/>
                        <a className="card-links-home" href="mailto:consulta@fisioin.es">consulta@fisioin.es</a><br/>
                        <a className="card-links-home" href="https://api.whatsapp.com/send/?phone=34650369409&text&type=phone_number&app_absent=0">Whatsapp <i className="fab fa-whatsapp"></i></a>
                    </p>

                </div>
            </div>
        </div>
        <div className="col-12 col-lg-6 home-oferta">
            <h5 className="title-bienvenida">VUELVE A SENTIR LA VIDA QUE TE GUSTA</h5>
            <h5 className="subtitle-bienvenida">Bienvenidos</h5>
            <p className="text-bienvenida">
                FISIOIN MADRID SL, expertos en rehabilitación neurológica a domicilio, nace para facilitar el acceso a los servicios de fisioterapia, logopedia, neuropiscología y terapia ocupacional, tanto a personas con limitaciones de movilidad como a personas que prefieran recibir su tratamiento en la comodidad de su hogar.
                Apostamos por un nuevo modelo de tratamiento en el que combinar las sesiones presenciales a domicilio con las ventajas que nos aporta la tecnología, disponiendo de videoconsultas y sesiones online para poder estar en contacto con tu terapeuta a lo largo del tratamiento
                -10% en todos nuestros bonos, verano 23 (válida hasta 30 junio)</p>
            <img src={imagenOferta} className="imagen-oferta-home" alt="imagen oferta"/>
        </div>
    </div>
    )

}