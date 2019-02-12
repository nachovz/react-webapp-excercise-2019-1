import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "../component/Carousel.jsx";

export class Home extends React.Component {
	render() {
		return (
			<div className="container">
				<Carousel />
			</div>
		);
	}
}
