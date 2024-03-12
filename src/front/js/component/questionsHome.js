import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const QuestionsHome = () =>  {

    const questions =[
        {
            question:"¿Como saber cuál es el mejor tratamiento para mi?",
            answer:(
              <span>
                  Ponte en contacto con nosotros aquí: <Link to="/contacto"> <i className="fa-solid fa-phone icon-phone"> </i>Contacto</Link>
              </span>),
            ncollapse:"panelsStayOpen-collapse1"
        },
        {
            question:"¿Cuánto tiempo de validez tienen los bonos?",
            answer:"Los bonos de más de 5 sesiones tienen una validez de hasta 6 meses",
            ncollapse:"panelsStayOpen-collapse3"
        },
        {
          question:"¿Cómo son las posibles formas de pago?",
          answer:"El pago se realiza a la contratación de los servicios y se puede realizar por transferencia, efectivo o domiciliazión.",
          ncollapse:"panelsStayOpen-collapse5"
      }
    ]
    const question = [
      {
        question:"¿En qué zonas trabajamos?",
        answer:"Ofrecemos servicios en el hogar en Pozuelo, Boadilla, Las Rozas, Majadahonda, Aravaca-Moncloa y Aluche. Para otras zonas ponte en contacto con nosotros",
        ncollapse:"panelsStayOpen-collapse2"
      },
      {
        question:"¿Puedo compartir mis bonos con otras personas?",
        answer:"Se puede compartir con tu núcleo familiar: Pareja, Abuelos , Padres e Hijos.",
        ncollapse:"panelsStayOpen-collapse4"
    },
    {
        question:"¿Cómo funcionan las video sesiones? ",
        answer:"La video sesión se confirmará como una cita más, se te enviará un correo con el enlace para iniciar la videosesión a la hora y fecha programada, tú sólo tendras que dar un click. Sin instalaciones ni requerimientos técnicos por tu parte, accederas a un entorno encriptado, personal y seguro con estandares homologados.",
        ncollapse:"panelsStayOpen-collapse6"
    }
    ]
    return (
        <section className="container-fluid all-questions">
          <div className="row card-questions">
            <div className="accordion col-12 col-md-6" id="accordionPanelsStayOpenExample">
              {questions.map((pregunta,index)=>{
                return(
                  <div className="accordion-item one-question" key={index}>
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${pregunta.ncollapse}`} aria-expanded="false" aria-controls={pregunta.ncollapse}>
                        <strong className="text-questions">{pregunta.question}</strong>
                      </button>
                    </h2>
                    <div id={pregunta.ncollapse} className="accordion-collapse collapse">
                      <div className="accordion-body">
                        <p className="text-questions">{pregunta.answer}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="accordion col-12 col-md-6" id="accordionPanelsStayOpenExample">
              {question.map((pregunta,index)=>{
                return(
                  <div className="accordion-item one-question" key={index}>
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${pregunta.ncollapse}`} aria-expanded="false" aria-controls={pregunta.ncollapse}>
                        <strong className="text-questions">{pregunta.question}</strong>
                      </button>
                    </h2>
                    <div id={pregunta.ncollapse} className="accordion-collapse collapse">
                      <div className="accordion-body">
                        <p className="text-questions">{pregunta.answer}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      );
    };