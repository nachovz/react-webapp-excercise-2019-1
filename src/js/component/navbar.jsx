import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<Link to className="navbar-brand" href="#">
					Powered by SiteNav
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<Link to="/" className="nav-link">
								Home <span className="sr-only">(current)</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/blog" className="nav-link">
								Blog
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/checkout" className="nav-link">
								Check Out
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/Demo" className="nav-link">
								Demo
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/Single" className="nav-link">
								Single
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/Login" className="nav-link">
								Login
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/StoreView" className="nav-link">
								StoreView
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
