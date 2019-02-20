import React from "react";
import PropTypes from "prop-types";

export const CartItem = props => {
	return (
		<li className="list-group-item d-flex justify-content-between lh-condensed">
			<div>
				<h6 className="my-0">{props.title}</h6>
				<small className="text-muted">{props.description}</small>
			</div>
			<span className="text-muted">{props.cost}</span>
		</li>
	);
};

CartItem.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	cost: PropTypes.number
};
