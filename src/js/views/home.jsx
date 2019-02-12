import React from "react";
import { Link } from "react-router-dom";

import "../../styles/home.css";
import { Cardsround } from "../component/Cardsround.jsx";
import { Cards } from "../component/Cards.jsx";

export class Home extends React.Component {
	render() {
		return (
			<div className="container">
				<Cardsround />
				<Cards />
			</div>
		);
	}
}
