import React from "react";
import "../../styles/home.css";
import imagenFisio from "../../img/IMG_0395.jpg";
import imagenLogo from "../../img/IMG_9200.jpg";
import imagenNeuro from "../../img/IMG_9147.jpg";
import imagenTo from "../../img/IMG_0635.jpg";


export const Especialidades = () =>{
    const specialidad = [
        {
        title:"FISIOTERAPIA",
        description:"Restaura las capacidades físicas y mejora las alteraciones estructurales o sensitivas que aparecen tras un daño neurológico para conseguir una mayor autonomía y mejorar así la calidad de vida de los pacientes",
        img: imagenFisio
        },
        {
        title:"LOGOPEDIA",
        description:"Recupera o mantiene las capacidades relacionadas con la comunicación (voz, habla, lenguaje) y aborda las alteraciones miofuncionales que involucren a procesos como la respiración, deglución o masticación.",
        img: imagenLogo
        },
        {
        title:"NEUROPSICOLOGÍA",
        description:"Valora las capacidades cognitivas de la persona con el fin de detectar alteraciones especificas y, posteriormente, llevar a cabo el diseño de un plan de intervención dirigido a rehabilitar, reforzar o compensar dichas alteraciones. Acompañamiento emocional al paciente y familiares.",
        img: imagenNeuro
        },
        {
        title:"TERAPIA OCUPACIONAL",
        description:"Aumenta la independencia en la ejecución de las actividades de la vida diaria, tanto básicas (alimentación, vestido, transferencias…) como instrumentales (manejo del dinero, gestión de la medicación, compras…), mejorando o compensando el desempeño de las mismas.",
        img: imagenTo
        },
    ]
    return(
        <section className="container-fluid all-especialidades">
            <div className="row row-especialidades">
                {specialidad.map((especialidad,index)=>{
                    return(
                        <div className="card col-12 col-md-6 col-xxl-3 gy-3 card-especialidades" key={index}>
                            <img src={especialidad.img} className="imagen-especialidades" alt="imagen especialidad"/>
                            <div className="card-body card-texto-especialidades">
                                <h5 className="card-title title-especialidad text-center">{especialidad.title}</h5>
                                <p className="card-text description-especialidades">{especialidad.description}</p>
                                {/* <a href="#" className="btn btn-primary">Saber más</a> */}
                            </div>
                        </div>
                    ) 
                })}
            </div>
        </section>
    )
}