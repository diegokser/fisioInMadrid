import React from "react";
import "../../styles/home.css";
import { Slider } from "../component/slider";
import { CardHome } from "../component/cardHome";

export const Home = () => {

	return (
		<div>
			<Slider />
			<CardHome />
		</div>
	);
};
