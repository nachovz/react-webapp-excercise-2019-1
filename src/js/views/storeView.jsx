import React from "react";
import ProductCard from "../component/ProductCard.jsx";
import Navbar from "../component/navbar.jsx";
import Footer from "../component/footer.jsx";

import { Context } from "../store/appContext.jsx";

export class StoreView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			color: [
				"bg-primary",
				"bg-light",
				"bg-info",
				"bg-secondary",
				"bg-danger"
			]
		};
	}
	render() {
		return (
			<div>
				<div className="container-fluid">
					<div className="jumbotron mb-0">
						<h1 className="display-4 text-center">Hello, world!</h1>
						<p className="lead text-center">
							This is a simple hero unit, a simple jumbotron-style
							component for calling extra attention to featured
							content or information.
						</p>

						<p className="lead text-center">
							<a
								className="btn btn-light btn-lg"
								href="#"
								role="button">
								Learn more
							</a>
						</p>
					</div>
				</div>
				<div className="container-fluid">
					<div className="row">
						<Context.Consumer>
							{({ store }) => {
								return store.products.map((item, index) => {
									return (
										<ProductCard
											key={index}
											src={item.image}
											title={item.name}
											description={item.description}
											price={item.price}
											backgroundColor={[
												this.state.color[
													Math.floor(
														Math.random() *
															this.state.color
																.length
													)
												]
											]}
											textColor=".text-warning"
											shadowColor="bg-transparent"
										/>
									);
								});
							}}
						</Context.Consumer>
					</div>
				</div>
			</div>
		);
	}
}
