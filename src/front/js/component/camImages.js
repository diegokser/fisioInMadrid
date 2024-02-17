import React from "react";
import "../../styles/home.css";
import imagenCam from "../../img/IMG_0488.jpg";
import imagenColegio from "../../img/IMG_0649.jpg";

export const CamImages = () =>  {

    return (
        <section className="container-fluid container-img-col">
          <div className="row">
            <div className="col-12 col-md-6 all-img-col">
                <img src={imagenCam} className="img-col" alt="imagen cheque servicio"/>
            </div>
            <div className="col-12 col-md-6 all-img-col">
                <img src={imagenColegio} className="img-col" alt="imagen colegiofisio"/>
            </div>
          </div>
        </section>
      );
    };