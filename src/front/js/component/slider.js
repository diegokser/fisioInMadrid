import React from "react";
import imgSlider1 from "../../img/IMG-0379.jpg";
import imgSlider2 from "../../img/IMG_9122.jpg";
// import imgSlider2 from "../../img/IMG-0381.jpg";
import imgSlider3 from "../../img/RECORTADA.jpg";
import "../../styles/home.css";


export const Slider = () => {
    return(
        <div className="carousel-container carousel slide container-fluid" id="carouselExampleAutoplaying" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="carousel-caption">
                        <h3 className="caption-title">REHABILITACIÓN NEURÓLOGICA<br/> A DOMICILIO</h3>
                        <p className="caption-description">Fisioterapia, Logopedia, Neuropsicología, Terapia Ocupacional</p>
                    </div>
                    <div className="carousel-overlay"></div>
                    <img src={imgSlider1} className="d-block w-100 img-slider-home" alt="imagen de un señor en una pelota"/>
                </div>
                <div className="carousel-item">
                    <div className="carousel-caption">
                        <h3 className="caption-title">REHABILITACIÓN INTEGRAL</h3>
                        <p className="caption-description">ICTUS, TCE, lesión medular, Parkinson, Esclerosis múltiple, Guillain Barré, Alzheimer…</p>
                    </div>
                    <div className="carousel-overlay"></div>
                    <img src={imgSlider2} className="d-block w-100 img-slider-home" alt="imagen de un señor con pesas"/>
                </div>
                <div className="carousel-item">
                    <div className="carousel-caption">
                        <h3 className="caption-title">SIN DESPLAZAMIENTOS <br/> NI SALAS DE ESPERA</h3>
                        <p className="caption-description">Nos trasladamos a Pozuelo, Aravaca, Boadilla, Majadahonda, Aluche, Alcorcón</p>
                    </div>
                    <div className="carousel-overlay"></div>
                    <img src={imgSlider3} className="d-block w-100 img-slider-home" alt="imagen de un señor con pesas"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}