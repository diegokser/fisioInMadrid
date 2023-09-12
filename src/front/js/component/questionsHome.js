import React, { useState } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const QuestionsHome = () =>  {
    const [collapsed, setCollapsed] = useState({});
  
    const toggleCollapse = (index) => {
        setCollapsed({
        ...collapsed,
        [index]: !collapsed[index],
        });
    };

    const iconClass = (index) =>
        collapsed[index]
        ? "fas fa-chevron-down icono-questions"
        : "fas fa-chevron-right icono-questions";

    const questions =[
        {
            question:"¿En qué zonas trabajamos?",
            answer:"Ofrecemos servicios en el hogar en Pozuelo, Boadilla, Las Rozas, Majadahonda, Aravaca-Moncloa y Aluche. Para otras zonas ponte en contacto con nosotros",
            ncollapse:"collapse2"
        },
        {
            question:"¿Cuánto tiempo de validez tienen los bonos?",
            answer:"Los bonos de más de 5 sesiones tienen una validez de hasta 6 meses",
            ncollapse:"collapse3"
        },
        {
            question:"¿Puedo compartir mis bonos con otras personas?",
            answer:"Se puede compartir con tu núcleo familiar: Pareja, Abuelos , Padres e Hijos.",
            ncollapse:"collapse4"
        },{
            question:"¿Cómo son las posibles formas de pago?",
            answer:"El pago se realiza a la contratación de los servicios y se puede realizar por transferencia, pasarela de pago online o domiciliazión.",
            ncollapse:"collapse5"
        },
        {
            question:"¿Cómo funcionan las video sesiones? ",
            answer:"La video sesión se confirmará como una cita más, se te enviará un correo con el enlace para iniciar la videosesión a la hora y fecha programada, tú sólo tendras que dar un click. Sin instalaciones ni requerimientos técnicos por tu parte, accederas a un entorno encriptado, personal y seguro con estandares homologados.",
            ncollapse:"collapse6"
        }
]
return (
    <div className="container-fluid all-questions">
      <div className="row card-questions">
        <div className="col-12 col-md-5 one-question">
          <p className="d-inline-flex gap-1">
            <a
              className="btn text-questions"
              data-bs-toggle="collapse"
              href="#collapse1"
              role="button"
              aria-expanded={collapsed["collapse1"]}
              aria-controls="collapse1"
              onClick={() => toggleCollapse("collapse1")}
            >
              <strong>¿Cómo saber cuál es el mejor tratamiento para mí? </strong>
              <i className={iconClass("collapse1")}></i>
            </a>
          </p>
          <div className={`collapse multi-collapse ${collapsed["collapse1"] ? 'show' : ''}`} id="collapse1">
            <div className="card card-body collapse-questions">
              <p className="text-questions">
                Ponte en contacto con nosotros aquí:{" "}
                <Link to="/contacto" className="fa-solid fa-phone"></Link>
              </p>
            </div>
          </div>
        </div>
        {questions.map((pregunta) => {
          return (
            <div className="col-12 col-md-5 one-question" key={pregunta.ncollapse}>
              <p className="d-inline-flex gap-1">
                <a
                  className="btn text-questions"
                  data-bs-toggle="collapse"
                  href={`#${pregunta.ncollapse}`}
                  role="button"
                  aria-expanded={collapsed[pregunta.ncollapse]}
                  aria-controls={pregunta.ncollapse}
                  onClick={() => toggleCollapse(pregunta.ncollapse)}
                >
                  <strong>{pregunta.question}</strong>
                  <i className={iconClass(pregunta.ncollapse)}></i>
                </a>
              </p>
              <div
                className={`collapse multi-collapse ${
                  collapsed[pregunta.ncollapse] ? 'show' : ''
                }`}
                id={pregunta.ncollapse}
              >
                <div className="card card-body collapse-questions">
                  <p className="text-questions">{pregunta.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};