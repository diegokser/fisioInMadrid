import React, { useEffect, useState } from "react";
import "../../styles/contacto.css";
import imagenLogo from "../../img/Mano.png";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Contacto = () => {
    const navigate = useNavigate()
    const [mail, setMail] = useState({
        name:"",
        email:"",
        phone: "",
        message: ""
    })

    const handleMail = async (e) => {
        e.preventDefault();
        // console.log(mail);
        // if (mail.name === "" || mail.email === "" || mail.phone === "") {
        //     // console.log("Faltan datos");
        //     toast.error('Faltan datos')
        // } else {
            try {
                const response = await fetch(
                    `${process.env.BACKEND_URL}/api/send_email`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(mail),  
                    }
                );
    
                if (response.ok) {
                    const result = await response.text();  // texto No es JSON 
                    // console.log('Email enviado:', result);
                    toast.success('Email enviado!', {
                        onClose: () => {
                            navigate('/', { replace: true });
                        }
                    });
                } else {
                    console.error('Error al enviar el email:', response.statusText);
                    toast.error('Error al enviar el email')
                }

            } catch (error) {
                console.error("Error en la solicitud API:", error);
                toast.error('Error al enviar el email')
            }
        // }
    };

    const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 780);
    };

    // Agregar evento de escucha para cambios en el tamaño de la ventana
    window.addEventListener('resize', handleResize);

    // Llamar a handleResize cuando el componente se monta para establecer el estado inicial
    handleResize();

    // Limpiar el evento de escucha cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


    return(
        <section className="container-fluid container-contacto">
            <h1 className="title-contacto">CONTÁCTANOS <img className="imagen-logo-contacto"src={imagenLogo} alt="Logo de la empresa"/></h1>
            <div className="row row-contacto-form">
                <div className="paragraph-contact">
                    <p className="text-contacto">{/* ¿Necesitas más información?
                    <br /> */}Completa el formulario para consultas y sugerencias y nos pondremos en contacto contigo lo antes posible.</p>
                    <p className="text-contacto">
                    Nuestro horario de atención es de <span className="contacto-horario">lunes a viernes de 9 am a 9 pm.</span> ¡Estamos aquí para ayudarte!</p>
                </div>
                <div className="col-12 col-md-6 all-type-contact">
                    <div className="row row-contact">
                        <div className="card card-contacto col-12">
                            <div className="row row-icono">
                                <i className="col-2 far fa-envelope icono-email"></i>
                                <p className="col-9 p-4 card-title text-contacto">Puedes enviarnos un email a<br /> <a className="link-contacto" href="mailto:consulta@fisioin.es">consulta@fisioin.es</a></p>
                            </div>
                        </div>
                        <div className="card card-contacto col-12">
                            <div className="row row-icono">
                                <i className="col-2 fa-solid fa-phone icono-tlf"></i>
                                <p className="col-9 p-4 card-title text-contacto">Puedes llamarnos al<br /> <a className="link-contacto" href="tel:+34650369409">650369409</a></p>
                            </div>
                        </div>
                        <div className="card card-contacto col-12">
                            <div className="row row-icono">
                                <i className="col-2 fab fa-whatsapp icono-whatsapp"></i>
                                <p className="card-text p-4 col-9 text-contacto">Puedes escribirnos un <br /><a className="link-contacto" href="https://api.whatsapp.com/send/?phone=34650369409&text&type=phone_number&app_absent=0">WhatsApp</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 card-form-contacto">
                    <div className="card form-contacto">
                        <form className="card-body" onSubmit={(e) => handleMail(e)}>
                            <div className="mb-3">
                                <label htmlFor="name-form" className="form-label label-contacto text-contacto-form">Nombre completo</label>
                                <input type="text" className="form-control" id="name-form" placeholder="FisioIn Madrid" value={mail.name} onChange={(data)=> {setMail({...mail, name: data.target.value})}}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email-form" className="form-label label-contacto text-contacto-form">Email de contacto</label>
                                <input type="email" className="form-control" id="email-form" placeholder="name@example.com" value={mail.email} onChange={(data)=> {setMail({...mail, email: data.target.value})}} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone-form" className="form-label label-contacto text-contacto-form">Número de teléfono</label>
                                <input type="text" className="form-control" id="phone-form" placeholder="+34 XXX XX XX XX" value={mail.phone} onChange={(data)=> {setMail({...mail, phone: data.target.value})}}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label label-contacto text-contacto-form">Cuéntanos tu caso</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={mail.message} onChange={(data)=> {setMail({...mail, message: data.target.value})}}></textarea>
                            </div>
                            <div className="d-flex">
                                <button type="submit" className="btn btn-contacto text-contacto-form">Enviar</button>
                            </div>
                            <ToastContainer
                            position="bottom-right"
                            autoClose={1000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="colored"
                            onClose="resolve"
                            />
                        </form>
                    </div>
                    <p className="text-asterisco">** Puedes rellenar el formulario de forma anónima para enviarnos tus sugerencias.</p>
                </div>
            </div>
        </section>
    )
}