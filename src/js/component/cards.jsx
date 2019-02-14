import React from "react";
import PropTypes from "prop-types";

export default class Cards extends React.Component {
	render() {
		return (
			<div>
				<div
					className={`${
						this.props.backgroundColor
					} pt-3 px-3 pt-md-5 px-md-5 text-center ${
						this.props.textColor
					} overflow-hidden`}>
					<div className="my-3 py-3">
						<h2 className="display-5">Another headline</h2>
						<p className="lead">And an even wittier subheading.</p>
					</div>
					<div
						className={`${
							this.props.shadowColor
						} bg-light shadow-sm mx-auto black`}
					/>
				</div>
			</div>
		);
	}
}
Cards.propTypes = {
	backgroundColor: PropTypes.string,
	shadowColor: PropTypes.string,
	textColor: PropTypes.string
};
