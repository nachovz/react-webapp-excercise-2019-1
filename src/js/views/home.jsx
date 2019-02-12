import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { Carousel } from "../component/Carousel.jsx";
=======

import "../../styles/home.css";
import { Cardsround } from "../component/Cardsround.jsx";
import { Cards } from "../component/Cards.jsx";
>>>>>>> 3f48e06d33838cd95fa45ae2e5a1e1b0f0d80384

export class Home extends React.Component {
	render() {
		return (
			<div className="container">
<<<<<<< HEAD
				<Carousel />
=======
				<Cardsround />
				<Cards />
>>>>>>> 3f48e06d33838cd95fa45ae2e5a1e1b0f0d80384
			</div>
		);
	}
}
