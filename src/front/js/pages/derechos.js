import React from 'react';
import imagenDerechos1 from "../../img/IMG_0655.jpeg";
import imagenDerechos2 from "../../img/IMG_0656.jpeg";
import "../../styles/tarifas.css";

export const Derechos = () => {

  return (
    <article className='container-fluid p-5'>
        <h1 className='title-tarifas pb-5'>DECÁLOGO DE LOS DERECHOS DE LOS USUARIOS</h1>
        <img src={imagenDerechos1} className="card-img-top" alt="imagen derechos"/>
        <img src={imagenDerechos2} className="card-img-top" alt="imagen derechos"/>
    </article>
  );
}