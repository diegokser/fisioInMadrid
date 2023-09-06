import React from "react";
import "../../styles/home.css";
import imagenCard from "../../img/IMG-0376.jpg";

export const CardHome  = () =>{
    return(
    <div className="row card-info-home">
        <div className="col-6">
            <div className="card">
                <img src={imagenCard} className="card-img-top img-1-home" alt="imagen masaje"/>
                <div className="card-body card-home-text">
                    <p className="card-text">
                        ABIERTOS A ESCUCHARTE <br/>
                        Horario de atención telefónica: <br/>
                        L - V 9 am - 9pm <br/>
                        Atención en linea 24/7
                    </p>
                    <a href="mailto:consulta@fisioin.es">consulta@fisioin.es</a><br/>
                    <a href="https://api.whatsapp.com/send/?phone=34650369409&text&type=phone_number&app_absent=0">Whatsapp <i className="fab fa-whatsapp"></i></a>
                </div>
            </div>
        </div>
        <div className="col-6">
            
        </div>
    </div>
    )

}