import React from "react";
import "../../styles/home.css";
import imagenCam from "../../img/IMG_CAM.jpg";

export const CamImages = () =>  {

    return (
        <section className="container-fluid container-img-col">
          <div className="row">
            <div className="col-12 all-img-col">
                <img src={imagenCam} className="img-col" alt="imagen cheque servicio"/>
            </div>
          </div>
        </section>
      );
    };