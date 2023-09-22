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
			<section className="container-fluid container-especialidades">
				<div className="text-especialidades">
					<h1 className="title-especialidades"><span className="title-1">NUESTRAS</span><span className="title-2"> ESPECIALIDADES</span></h1>
					<h3 className="subtitle-especialidades">Neurorehabilitación a domicilio</h3>
					<p className="text-bienvenida">Tratamos enfermedades derivadas del sistema nervioso, tanto adquiridas como neurodegenerativas, como ICTUS, TCE, lesión medular, Parkinson, Esclerosis múltiple, ataxias, tumores, Guillain-Barré, cuerpos de Lewy, Alzheimer, demencias…</p>
				</div>
				<Especialidades />
			</section>
			<QuestionsHome />
		</div>
	);
};
