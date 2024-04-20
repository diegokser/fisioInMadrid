import { BackgroundColor } from '@cloudinary/url-gen/actions/background/actions/BackgroundColor';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
      <div className="container-fluid" style={{backgroundColor: "#F4F9FC"}}>
        <h1 style={{ textAlign: "center", padding: "3rem", color: "rgb(5,76,132)"}}>ERROR 404<br/>
        Página no encontrada</h1>
        <p style={{ textAlign: "center", padding: "3rem", color: "rgb(5,76,132)", fontSize:"1rem", margin:"0"}}>Lo sentimos, la página que buscas no se encuentra disponible en esta dirección. <br />
        Puede deberse a un fallo interno o a un error al teclear.<br />
        Pruebe a contactar con <Link to="/contacto">nosotros</Link>.
        </p>
      </div>
    );
  };
  
  export default NotFound;