import React from "react";
import "../../styles/home.css";
import { Slider } from "../component/slider";
import { CardHome } from "../component/cardHome";
import { Especialidades } from "../component/especialidades";
import { QuestionsHome } from "../component/questionsHome";

export const Home = () => {

	return (
		<div>
			<Slider />
			<CardHome />
			<div className="container-fluid text-especialidades">
				<h1 className="title-especialidades"><span className="title-1">NUESTRAS</span><span className="title-2"> ESPECIALIDADES</span></h1>
				<h3 className="subtitle-especialidades">Neurorehabilitación a domicilio</h3>
				<p className="text-bienvenida">En <strong className="title-2">FISIOIN</strong> contamos con un equipo multidisciplinar especializados en neurorrehabilitación para dar una atención integral personalizada y totalmente adaptada a las necesidades de cada paciente. Tratamos las enfermedades derivadas del sistema nervioso como son los ICTUS, TCE, tumores, ataxias, Párkinson, Esclerosis Múltiple, Guillain-Barré, cuerpos de Lewy, lesión medular, demencias, Alzheimer…</p>
				<Especialidades />
			</div>
			<QuestionsHome />
		</div>
	);
};
