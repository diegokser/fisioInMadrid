import React from "react";
import "../../styles/metodo.css";
import imagenCuidar from "../../img/IMG-0377.jpg";



export const Metodo = () =>{
    return(
        <section className="container-fluid container-metodo">
            <h1 className="title-metodo"><span className="title-1-metodo">NUESTRO </span><span className="title-2-metodo">MÉTODO</span></h1>
            <div className="all-card-metodo">
                <div className="card card-metodo">
                    <div className="card-body">
                        <div className="row row-iconos">
                            <i className="col-2 fas fa-home icono-metodo"></i>
                            <h5 className="col-7 subtitle-metodo">SIN DESPLAZAMIENTOS</h5>
                        </div>
                        <p className="card-text text-metodo"> Ofrecemos servicios a domicilio para facilitar el acceso a los programas de rehabilitación.</p>
                    </div>
                </div>
                <div className="card card-metodo">
                    <div className="card-body">
                    <div className="row row-iconos">
                        <i className="col-2 fa-solid fa-calendar-days icono-metodo"></i>
                        <h5 className="col-7 subtitle-metodo">REHABILITACIÓN NEUROLÓGICA INTEGRAL</h5>
                    </div>
                        <p className="card-text text-metodo">Tratamiento individualizado con amplia flexibilidad horaria y adaptado a tus objetivos personales.</p>
                    </div>
                </div>
                <div className="card card-metodo">
                    <div className="card-body">
                        <div className="row row-iconos">
                            <i className="col-2 fas fa-hospital-user icono-metodo"></i> 
                            <h5 className="col-7 subtitle-metodo">EQUIPO ESPECIALIZADO</h5>
                        </div>
                        <p className="card-text text-metodo">Contamos con un equipo de profesionales especializados que apuestan por tratamientos de vanguardia y basados en la evidencia.</p>
                    </div>
                </div>
            </div>
            <div className="all-metodo">
                <div className="row row-text-img-metodo">
                    <div className="col-12 col-md-5 card-img-metodo">
                        <img src={imagenCuidar} className="img-metodo" alt="Una empleada cuidando a un cliente"/>                         
                    </div>
                    <div className="col-12 col-md-6 card-text-metodo">
                        <h3 className="title-metodo-2">Quiénes somos</h3>
                        <p className="text-metodo"><strong className="title-2">FISIOIN</strong> <strong className="title-1">MADRID</strong>  nace para facilitar el acceso a los servicios de rehabilitación, tanto a personas con limitaciones de movilidad como a personas que prefieran recibir su tratamiento en la comodidad de su hogar. Simplificamos los procesos para cumplir estos programas, gracias a una gran flexibilidad horaria y reduciendo los desplazamientos y tiempos de espera.</p>
                        <p className="text-metodo">Contamos con un equipo de profesionales altamente especializados que se involucrará en tu proceso de recuperación, teniendo en cuenta tus objetivos personales y adaptándose a tus necesidades.</p>
                        <p className="text-metodo">Creemos en la rehabilitación como método para mejorar la calidad de vida de los pacientes. Colaboramos con asociaciones, fundaciones y organismos que ayudan a su difusión y accesibilidad.</p>
                    </div>
                </div>
            </div>
		</section>
    )
}