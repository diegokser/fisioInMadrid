import React from "react";
import "../../styles/home.css";
import imagenMano from "../../img/IMG-0364.jpg";


export const Especialidades = () =>{
    const specialidad = [
        {
        title:"FISIOTERAPIA",
        description:"Restaura las capacidades físicas y mejora las alteraciones estructurales o sensitivas que aparecen tras un daño neurológico para conseguir una mayor autonomía y mejorar así la calidad de vida de los pacientes"
        },
        {
        title:"LOGOPEDIA",
        description:"Recupera o mantenien las capacidades relacionadas con la comunicación (voz, habla, lenguaje) y abordar las alteraciones miofuncionales que involucren a procesos como la respiración, deglución o masticación."
        },
        {
        title:"NEUROPSICOLOGIA",
        description:"Recupera o mantenien las capacidades relacionadas con la comunicación (voz, habla, lenguaje) y abordar las alteraciones miofuncionales que involucren a procesos como la respiración, deglución o masticación."
        },
        {
        title:"TERAPIA OCUPACIONAL",
        description:"Aumenta la independencia en la ejecución de las actividades de la vida diaria, tanto básicas (alimentación, vestido, transferencias…) como instrumentales (manejo del dinero, gestión de la medicación, compras…), mejorando o compensando el desempeño de las mismas."
        },
    ]
    return(
        <div className="container-fluid all-especialidades">
            <div className="row row-especialidades">
                {specialidad.map((especialidad,index)=>{
                    return(
                        <div className="card col-12 col-md-6 col-lg-3 gy-3 card-especialidades" key={index}>
                            <img src={imagenMano} className="card-img-top imagen-especialidades" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title title-bienvenida text-center">{especialidad.title}</h5>
                                <p className="card-text description-especialidades">{especialidad.description}</p>
                                {/* <a href="#" className="btn btn-primary">Saber más</a> */}
                            </div>
                        </div>
                    ) 
                })}
            </div>
        </div>
    )
}