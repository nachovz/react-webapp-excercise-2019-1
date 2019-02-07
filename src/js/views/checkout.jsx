import React from "react";

export class Checkout extends React.Component {
	render() {
		return (
			<div>
				<div className="jumbotron jumbotron-fluid">
					<div className="container">
						<img
							src="/docs/4.2/assets/brand/bootstrap-solid.svg"
							width="30"
							height="30"
							alt=""
						/>
						<h1 className="display-4">Checkout form</h1>
						<p className="lead">
							Below is an example form built entirely with
							Bootstraps form controls. Each required form group
							has a validation state that can be triggered by
							attempting to sub0mit the form without completing
							it.
						</p>
					</div>
				</div>
			</div>
		);
	}
}
