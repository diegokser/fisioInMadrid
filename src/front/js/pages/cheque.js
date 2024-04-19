import React from "react";
import "../../styles/cheque.css";
import { Link } from "react-router-dom";
import imagenCheque from "../../../../public/IMG_0488.jpg";


export const Cheques = () =>{

    return(
        <section className="container-fluid container-cheque">
            <h1 className="title-cheque"><span className="title-1-cheque">CHEQUE </span><span className="title-2-cheque">SERVICIO</span></h1>
            <h3 className="subtitle-cheque">Rehabilitación neurológica a domicilio</h3>
            <div className="all-cheque">
                <div className="row">
                    <div className="col-12 col-xl-8">
                        <p className="text-cheque">El Cheque Servicio es una prestación económica que ofrece la Comunidad de Madrid asociada
                                                    a la Ley de Dependencia, que contribuye a la financiación del coste del servicio. Este centro
                                                    está homologado por la Dirección General de Servicios Sociales e Integración Social para poder
                                                    realizar con nosotros la rehabilitación médico funcional. </p>
                        <p className="text-cheque">
                        En Fisioin Madrid somos expertos en fisioterapia y rehabilitación neurológica, contamos con
                        un equipo multidisciplinar formado por fisioterapeutas, logopedas, neuropsicólogas y
                        terapeutas ocupacionales que proporcionarán una atención integral personalizada y
                        totalmente adaptada a las necesidades de cada usuario.</p>
                        <p className="text-cheque">Este servicio se rige por el decálogo de <Link className="link-text-cheque" to="/derechos">derechos de los usuarios.</Link></p>
                        <p className="text-cheque">Contacta con nosotros para <Link className="link-text-cheque" to="/contacto"> consultar tu caso</Link></p>

                    </div>
                    <div className="col-12 col-xl-4 card-img-metodo">
                        <img src={imagenCheque} className="img-cheque" alt="Imagen logo del cheque servicio de la Comunidad de Madrid"/>                         
                    </div>
                </div>
            </div>
        </section>
    )
}