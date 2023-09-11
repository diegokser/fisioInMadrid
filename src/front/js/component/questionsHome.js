import React, { useState } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const QuestionsHome = () =>  {
    const [iconRotated, setIconRotated] = useState(false);

    const toggleIconRotation = () => {
        setIconRotated(!iconRotated);
    };

    const iconClass = iconRotated ? "fas fa-chevron-down icono-questions" : "fas fa-chevron-right icono-questions";
// MIRAR BOOTSTRAP COLLAPSE MULTI 
    return (
        <div className="container-fluid all-questions">
            <div className="row card-questions">
                <div className="col-12 col-md-5 one-question">
                    <p className="d-inline-flex gap-1">
                    <a className="btn text-questions" data-bs-toggle="collapse" href="#collapse1" role="button" aria-expanded="false" aria-controls="collapse1" onClick={toggleIconRotation} >
                        <strong>¿Cómo saber cuál es el mejor tratamiento para mí? </strong><i className={iconClass}></i>
                    </a>
                    </p>
                    <div className="collapse" id="collapse1">
                        <div className="card card-body collapse-questions">
                            <p className="text-questions">Ponte en contacto con nosotros aquí: <Link to="/contacto" className="fa-solid fa-phone"></Link></p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-5 one-question">
                    <p className="d-inline-flex gap-1">
                    <a className="btn text-questions" data-bs-toggle="collapse" href="#collapse2" role="button" aria-expanded="false" aria-controls="collapse3" onClick={toggleIconRotation} >
                        <strong>¿En qué zonas trabajamos? </strong><i className={iconClass}></i>
                    </a>
                    </p>
                    <div className="collapse" id="collapse2">
                        <div className="card card-body collapse-questions">
                            <p className="text-questions">Ofrecemos servicios en el hogar en Pozuelo, Boadilla, Las Rozas, Majadahonda, Aravaca-Moncloa y Aluche. Para otras zonas ponte en contacto con nosotros</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-5 one-question">
                    <p className="d-inline-flex gap-1">
                    <a className="btn text-questions" data-bs-toggle="collapse" href="#collapse3" role="button" aria-expanded="false" aria-controls="collapse4" onClick={toggleIconRotation} >
                        <strong>¿Cuánto tiempo de validez tienen los bonos? </strong><i className={iconClass}></i>
                    </a>
                    </p>
                    <div className="collapse" id="collapse3">
                        <div className="card card-body collapse-questions">
                            <p className="text-questions">Los bonos de más de 5 sesiones tienen una validez de hasta 6 meses</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-5 one-question">
                    <p className="d-inline-flex gap-1">
                    <a className="btn text-questions" data-bs-toggle="collapse" href="#collapse4" role="button" aria-expanded="false" aria-controls="collapse4" onClick={toggleIconRotation} >
                        <strong>¿Puedo compartir mis bonos con otras personas? </strong><i className={iconClass}></i>
                    </a>
                    </p>
                    <div className="collapse" id="collapse4">
                        <div className="card card-body collapse-questions">
                            <p className="text-questions">Se puede compartir con tu núcleo familiar: Pareja, Abuelos , Padres e Hijos.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-5 one-question">
                    <p className="d-inline-flex gap-1">
                    <a className="btn text-questions" data-bs-toggle="collapse" href="#collapse5" role="button" aria-expanded="false" aria-controls="collapse5" onClick={toggleIconRotation} >
                        <strong>¿Cómo son las posibles formas de pago? </strong><i className={iconClass}></i>
                    </a>
                    </p>
                    <div className="collapse" id="collapse5">
                        <div className="card card-body collapse-questions">
                            <p className="text-questions">El pago se realiza a la contratación de los servicios y se puede realizar por transferencia, pasarela de pago online o domiciliazión.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-5 one-question">
                    <p className="d-inline-flex gap-1">
                    <a className="btn text-questions" data-bs-toggle="collapse" href="#collapse6" role="button" aria-expanded="false" aria-controls="collapse6" onClick={toggleIconRotation} >
                        <strong>¿Cómo funcionan las video sesiones? </strong><i className={iconClass}></i>
                    </a>
                    </p>
                    <div className="collapse" id="collapse6">
                        <div className="card card-body collapse-questions">
                            <p className="text-questions">La video sesión se confirmará como una cita más, se te enviará un correo con el enlace para iniciar la videosesión a la hora y fecha programada, tú sólo tendras que dar un click. Sin instalaciones ni requerimientos técnicos por tu parte, accederas a un entorno encriptado, personal y seguro con estandares homologados.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}