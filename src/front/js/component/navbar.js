import React from "react";
import { Link } from "react-router-dom";
import logo  from "/workspaces/fisioInMadrid/src/front/img/IMG_0494.png"
import "/workspaces/fisioInMadrid/src/front/styles/navbar.css"

export const Navbar = () => {
	return (
		<div className="container-fluid navbar-all">
			<div className="row info-navbar info-navbar-responsive">
				<div className="col-5 text-navbar-info"><i className="fas fa-map-marker-alt"></i> Pozuelo, Moncloa, Boadilla, Majadahonda, Aluche, Alcorcón</div>
				{/* <div className="col-3 text-navbar-info"><i className="fas fa-envelope"></i> consulta@fisioin.es</div> */}
				<a href="mailto:consulta@fisioin.es" className="col-3 text-navbar-info"><i className="fas fa-envelope"></i> consulta@fisioin.es</a>
				<a href="tel:+34650369409" className="col-3 text-navbar-info"><i className="fas fa-phone"></i> 650369409</a>
			</div>
			<nav className="navbar navbar-expand-lg">
				<div className="container-fluid navbar-content">
					<Link className="navbar-brand" to="/">                    
						<img
							id="logotipo-page"
							src={logo}
							alt="Logo de la empresa"
						/>
					</Link>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<i className="fas fa-bars"></i>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link active" to="/">HOME</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/especialidades">ESPECIALIDADES</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/metodo">METODO</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/blog">BLOG</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/tarifas">TARIFAS</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/contacto">CONTACTO</Link>
						</li>
					</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};
