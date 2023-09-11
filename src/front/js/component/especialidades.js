import React from "react";
import "../../styles/home.css";
import imagenMano from "../../img/IMG-0364.jpg";


export const Especialidades = () =>{
    return(
        <div className="container-fluid all-especialidades">
            <div className="row row-especialidades">
                <div className="card col-12 col-md-6 col-lg-3 gy-3 card-especialidades">
                    <img src={imagenMano} className="card-img-top imagen-especialidades" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title title-bienvenida text-center">FISIOTERAPIA</h5>
                        <p className="card-text description-especialidades">Restaura las capacidades físicas y mejora las alteraciones estructurales o sensitivas que aparecen tras un daño neurológico para conseguir una mayor autonomía y mejorar así la calidad de vida de los pacientes</p>
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    </div>
                </div>
                <div className="card col-12 col-md-6 col-lg-3 gy-3 card-especialidades">
                    <img src={imagenMano} className="card-img-top imagen-especialidades" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title title-bienvenida text-center">LOGOPEDIA</h5>
                        <p className="card-text description-especialidades">Recupera o mantenien las capacidades relacionadas con la comunicación (voz, habla, lenguaje) y abordar las alteraciones miofuncionales que involucren a procesos como la respiración, deglución o masticación.</p>
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    </div>
                </div>
                <div className="card col-12 col-md-6 col-lg-3 gy-3  card-especialidades">
                    <img src={imagenMano} className="card-img-top imagen-especialidades" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title title-bienvenida text-center">NEUROPSICOLOGIA</h5>
                        <p className="card-text description-especialidades">Valora las capacidades cognitivas de la persona con el fin de detectar alteraciones específicas y, posteriormente, llevar a cabo el diseño de un plan de intervención dirigido a rehabilitar, reforzar o compensar dichas alteraciones. Acompañamiento emocional al paciente y familiares.</p>
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    </div>
                </div>
                <div className="card col-12 col-md-6 col-lg-3 gy-3  card-especialidades">
                    <img src={imagenMano} className="card-img-top imagen-especialidades" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title title-bienvenida text-center">TERAPIA OCUPACIONAL</h5>
                        <p className="card-text description-especialidades">Aumenta la independencia en la ejecución de las actividades de la vida diaria, tanto básicas (alimentación, vestido, transferencias…) como instrumentales (manejo del dinero, gestión de la medicación, compras…), mejorando o compensando el desempeño de las mismas.</p>
                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}