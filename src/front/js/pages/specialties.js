import React from "react";
import { Especialidades } from "../component/especialidades";
import "../../styles/home.css";
import "../../styles/specialties.css";

export const Specialties = () =>{
    return(
        <section className="container-fluid container-specialties">
            <div className="all-specialties">
                <h1 className="title-specialties"><span className="title-1">NUESTRAS</span><span className="title-2"> ESPECIALIDADES</span></h1>
                <h3 className="subtitle-specialties">Neurorrehabilitación a domicilio</h3>
                <p className="text-bienvenida">En <strong className="title-2">FISIOIN</strong> contamos con un equipo multidisciplinar especializados en neurorrehabilitación para dar una atención integral personalizada y totalmente adaptada a las necesidades de cada paciente. Tratamos las enfermedades derivadas del sistema nervioso como son los ICTUS, TCE, tumores, ataxias, Párkinson, Esclerosis Múltiple, Guillain-Barré, cuerpos de Lewy, lesión medular, demencias, Alzheimer…</p>
            </div>
            <Especialidades />
		</section>
    )
}