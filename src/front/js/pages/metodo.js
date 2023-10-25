import React from "react";
import "../../styles/metodo.css";
import imagenCuidar from "../../img/IMG-0377.jpg";



export const Metodo = () =>{
    return(
        <section className="container-fluid container-metodo">
            <h1 className="title-metodo"><span className="title-1-metodo">NUESTRO </span><span className="title-2-metodo">MÉTODO</span></h1>
            <div className="all-card-metodo">
                <div class="card card-metodo">
                    <div class="card-body">
                        <h5 class="subtitle-metodo"><i class="fas fa-home icono-metodo"></i> SIN DESPLAZAMIENTOS</h5>
                        <p class="card-text text-metodo"> Ofrecemos servicios a domicilio para facilitar el acceso a los programas de rehabilitación.</p>
                    </div>
                </div>
                <div class="card card-metodo">
                    <div class="card-body">
                        <h5 class="subtitle-metodo"><i class="fas fa-user icono-metodo"></i> NEURORREHABILITACIÓN INTEGRAL</h5>
                        <p class="card-text text-metodo">Tratamiento individualizado con amplia flexibilidad horaria y adaptado a tus objetivos personales.</p>
                    </div>
                </div>
                <div class="card card-metodo">
                    <div class="card-body">
                        <h5 class="subtitle-metodo"><i class="fas fa-hospital-user icono-metodo"></i> EQUIPO ESPECIALIZADO</h5>
                        <p class="card-text text-metodo">Contamos con un equipo de profesionales especializados que apuestan por tratamientos de vanguardia y basados en la evidencia.</p>
                    </div>
                </div>
            </div>
            <div className="all-metodo">
                <div className="row">
                    <div className="col-12 col-md-6 card-img-metodo">
                        <img src={imagenCuidar} className="img-metodo" alt="Una empleada cuidando a un cliente"/>                         
                    </div>
                    <div className="col-12 col-md-6">
                        <h3 className="title-metodo-2">Quiénes somos</h3>
                        <p className="text-metodo"><strong className="title-2">FISIOIN</strong> <strong className="title-1">MADRID</strong>  nace para facilitar el acceso a los programas de rehabilitación, tanto a personas con limitaciones de movilidad como a personas que prefieran recibir su tratamiento en la comodidad de su hogar.</p>
                        <p className="text-metodo">En <strong className="title-2">FISIOIN</strong>  estamos totalmente comprometidos con la recuperación del paciente, por ello simplificamos los procesos para cumplir los programas de rehabilitación. Disponemos de gran flexibilidad horaria y facilidad de reservar o modificar citas online, el terapeuta acude a tu domicilio para recudir el tiempo en desplazamientos y salas de espera, hacemos que sea participe de su recuperación marcando sus objetivos personales e individuales, siendo una atención totalmente personalizada.</p>
                        <p className="text-metodo">Contamos con un equipo de profesionales altamente especializados que se involucrará en tu proceso de recuperación, teniendo en cuenta tus objetivos personales y adaptándose a tus necesidades. Explicarán y resolverán todas tus dudas en cuanto a tu patología para hacerte partícipe de la recuperación y creando un vínculo paciente-terapeuta que trabaje unido en la misma dirección.</p>
                        <p className="text-metodo">Creemos en una rehabilitación universal y de calidad como un servicio clave para el sistema de salud. Por lo que colaboramos con asociaciones, fundaciones y organismos que nos permiten la difusión de la neurorrehabilitación como un método para mejorar la calidad de vida de los pacientes.</p>
                    </div>
                </div>
            </div>
		</section>
    )
}