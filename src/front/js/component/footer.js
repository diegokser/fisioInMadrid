import React from "react";
import "../../styles/footer.css";
import { Link } from "react-router-dom";
import imagenColegio from "../../img/IMG_0649.jpg";

export const Footer = () => (
  <footer className="footer_container" id="footer_contain">
    <div className="row footer_row">
      <div className="col-6 col-sm-4 footer_col" id="footer-column-social">
        <p className="footer_infotext"> Síguenos en:</p>
        <div className="footer_social">
          <a href="https://www.instagram.com/fisioinmadrid/"><i className="fab fa-instagram fa-lg footer_iconos"></i></a>
          <a href="https://www.facebook.com/people/Fisioin-Madrid/100086704850925/"><i className="fab fa-facebook-square fa-lg footer_iconos"></i></a>
        </div>
        <div className="imagenes-footer">
          <img src={imagenColegio} className="img-cam" alt="imagen colegiofisio"/>
        </div>
      </div>
      <div className="col-6 col-sm-4 footer_col footer-2-column">
        <div className="footer_infotext_container ">
          <p className="footer_infotext">Información</p>
            <Link to="/contacto" className="footer_infosubtext">Contacto</Link><br/>
            <Link to="/tarifas" className="footer_infosubtext" >Tarifas</Link><br/>
            <Link to="/cheque-servicio" className="footer_infosubtext">Cheque Servicio</Link><br/>
            <Link to="/especialidades" className="footer_infosubtext">Especialidades</Link><br/>
            <Link to="/blog" className="footer_infosubtext">Blog</Link><br/>
        </div>
      </div>
      <div className="col-6 col-sm-4 footer_col  ">
        <div className="footer_infotext_container ">
          <p className="footer_infotext">Links de ayuda</p>
            <Link to="/legal" className="footer_infosubtext">Aviso legal</Link><br/>
            <Link to="/privacidad" className="footer_infosubtext">Política de privacidad</Link><br/>
            <Link to="/cookies" className="footer_infosubtext">Política de cookies</Link><br/>
        </div>
      </div>
    </div>
  </footer>
);