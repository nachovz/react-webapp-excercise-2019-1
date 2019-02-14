import React from "react";
import PropTypes from "prop-types";

export default class Cards extends React.Component {
	render() {
		return (
			<div className="col-12 col-md-6 py-0 py-md-2">
				<div
					className={`${
						this.props.backgroundColor
					} pt-3 px-3 pt-md-5 px-md-5 text-center ${
						this.props.textColor
					} overflow-hidden`}>
					<div className="my-3 py-3">
						<h2 className="display-5">{this.props.title}</h2>
						<p className="lead">{this.props.description}</p>
						<p>{this.props.price}</p>
					</div>
					<div
						className={`bg-light shadow-sm mx-auto bg-transparent`}>
						<img className="black" src={this.props.src} />
					</div>
				</div>
			</div>
		);
	}
}
Cards.propTypes = {
	backgroundColor: PropTypes.array,
	textColor: PropTypes.string,
	description: PropTypes.string,
	price: PropTypes.number,
	title: PropTypes.string,
	src: PropTypes.string
};
