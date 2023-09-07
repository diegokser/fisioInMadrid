import React from "react";
import "../../styles/home.css";
import imagenCard from "../../img/IMG-0376.jpg";
import { Link } from "react-router-dom";

export const CardHome  = () =>{
    return(
    <div className="container-fluid row card-info-home">
        <div className="col-12 col-md-6">
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
        <div className="col-12 col-md-6">
            
        </div>
    </div>
    )

}