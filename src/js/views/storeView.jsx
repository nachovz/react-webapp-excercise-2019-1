import React from "react";
import Cards from "../component/cards.jsx";
import Navbar from "../component/navbar.jsx";
import Footer from "../component/footer.jsx";

export class StoreView extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
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
						<div className="col-12 col-md-6 py-0 py-md-2">
							<Cards
								backgroundColor="bg-dark"
								shadowColor="bg-light"
								textColor="text-white"
							/>
						</div>
						<div className="col-12 col-md-6 py-0 py-md-2">
							<Cards
								backgroundColor="bg-light"
								shadowColor="bg-dark"
								textColor="text-black"
							/>
						</div>
					</div>
					<div className="row">
						<div className="col-12 col-md-6 py-0 py-md-2">
							<Cards
								backgroundColor="bg-light"
								shadowColor="bg-dark"
							/>
						</div>
						<div className="col-12 col-md-6 py-0 py-md-2">
							<Cards
								backgroundColor="bg-primary"
								shadowColor="bg-white"
								textColor="text-white"
							/>
						</div>
					</div>
					<div className="row">
						<div className="col-12 col-md-6 py-0 py-md-2">
							<Cards
								backgroundColor="bg-light"
								shadowColor="bg-white"
							/>
						</div>
						<div className="col-12 col-md-6 py-0 py-md-2">
							<Cards
								backgroundColor="bg-light"
								shadowColor="bg-white"
							/>
						</div>
					</div>
					<div className="row">
						<div className="col-12 col-md-6 py-0 py-md-2">
							<Cards
								backgroundColor="bg-light"
								shadowColor="bg-white"
							/>
						</div>
						<div className="col-12 col-md-6 py-0 py-md-2">
							<Cards
								backgroundColor="bg-light"
								shadowColor="bg-white"
							/>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
