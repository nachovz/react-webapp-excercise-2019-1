import React from "react";
import { CartItem } from "../component/cartItem.jsx";
import { Context } from "../store/appContext.jsx";

export class Checkout extends React.Component {
	render() {
		return (
			<div className="container ">
				<div className="py-5 text-center">
					<img
						className="d-block mx-auto mb-4"
						src="https://getbootstrap.com/docs/4.1/assets/brand/bootstrap-solid.svg"
						alt=""
						width="72"
						height="72"
					/>
					<h2>Checkout form</h2>
					<p className="lead">
						Below is an example form built entirely with Bootstraps
						form controls. Each required form group has a validation
						state that can be triggered by attempting to submit the
						form without completing it.
					</p>
				</div>

				<div className="row">
					<div className="col-md-8 order-md-1">
						<h4>Billing address</h4>
						<form className="needs-validation">
							<div className="row">
								<div className="col-md-6 mb-3">
									<label htmlFor="validationCustom01">
										First name
									</label>
									<input
										className="form-control"
										type="text"
										id="validationCustom01"
										required
									/>
									<div className="invalid-feedback">
										Valid first name is required
									</div>
								</div>
								<div className="col-md-6 mb-3">
									<label htmlFor="validationCustom02">
										Last name
									</label>
									<input
										className="form-control"
										type="text"
										id="validationCustom02"
										required
									/>
									<div className="invalid-feedback">
										Valid last name is required
									</div>
								</div>
							</div>
							<div className="mb-3">
								<label htmlFor="validationCustomUsername">
									Username
								</label>

								<div className="input-group">
									<div className="input-group-prepend">
										<span className="input-group-text">
											@
										</span>
									</div>
									<input
										className="form-control"
										type="text"
										id="validationCustomUsername"
										placeholder="Username"
										required
									/>
									<div className="invalid-feedback">
										Please choose a unique and valid
										username.
									</div>
								</div>
							</div>
							<div className="mb-3">
								<label htmlFor="exampleInputEmail1">
									Email
									<span className="text-muted">
										(Optional)
									</span>
								</label>
								<input
									className="form-control"
									type="email"
									id="exampleInputEmail1"
									placeholder="you@example.com"
								/>
								<div className="invalid-feedback">
									Please enter a valid email address.
								</div>
							</div>
							<div className="mb-3">
								<label htmlFor="inputAddress">Address</label>
								<input
									className="form-control"
									type="text"
									id="inputAddress"
									placeholder="1234 Main St"
									required
								/>
								<div className="invalid-feedback">
									Please enter your shipping address
								</div>
							</div>
							<div className="mb-3">
								<label htmlFor="inputAddress2">
									Address 2
									<span className="text-muted">
										(Optional)
									</span>
								</label>
								<input
									className="form-control"
									type="text"
									id="inputAddress2"
									placeholder="Apartment, studio, or floor"
								/>
							</div>
							<div className="row">
								<div className="form-group col-md-6">
									<label htmlFor="inputCountry">
										Country
									</label>
									<select
										className="form-control"
										id="inputCountry"
										required>
										<option selected>Choose...</option>
										<option>United States</option>
									</select>
									<div className="invalid-feedback">
										Please select a valid country.
									</div>
								</div>
								<div className="form-group col-md-4">
									<label htmlFor="inputState">State</label>
									<select
										className="form-control"
										id="inputState"
										required>
										<option selected>Choose...</option>
										<option>California</option>
									</select>
									<div className="invalid-feedback">
										Please select a valid state.
									</div>
								</div>
								<div className="form-group col-md-2">
									<label htmlFor="inputZip">Zip</label>
									<input
										className="form-control"
										type="text"
										id="inputZip"
										required
									/>
									<div className="invalid-feedback">
										Zip code required.
									</div>
								</div>
							</div>
							<hr className="mb-4" />

							<div className="form-check">
								<input
									className="form-check-input"
									type="checkbox"
									id="sameAddress"
									required
								/>
								<label
									className="form-check-label"
									htmlFor="sameAddress">
									Shipping address is the same as my billing
									address
								</label>
							</div>
							<div className="form-check">
								<input
									className="form-check-input"
									type="checkbox"
									id="saveInformation"
									required
								/>
								<label
									className="form-check-label"
									htmlFor="saveInformation">
									Save this information for next time
								</label>
							</div>

							<hr className="mb-4" />

							<h4 className="mb-3">Payment</h4>

							<div className="col-sm-10">
								<div className="custom-control custom-radio">
									<input
										className="custom-control-input"
										type="radio"
										id="creditCard"
										name="paymentMethod"
										value="option1"
										checked
										required
									/>
									<label
										className="custom-control-label"
										htmlFor="creditCard">
										Credit Card
									</label>
								</div>
								<div className="custom-control custom-radio">
									<input
										className="custom-control-input"
										type="radio"
										id="debitCard"
										name="paymentMethod"
										value="option2"
										checked
									/>
									<label
										className="custom-control-label"
										htmlFor="debitCard">
										Debit Card
									</label>
								</div>
								<div className="custom-control custom-radio">
									<input
										className="custom-control-input"
										type="radio"
										id="payPal"
										name="paymentMethod"
										value="option3"
										checked
									/>
									<label
										className="custom-control-label"
										htmlFor="payPal">
										PayPal
									</label>
								</div>
							</div>

							<div className="row">
								<div className="col">
									<label htmlFor="cc-name">
										Name on Card
									</label>
									<input
										className="form-control"
										type="text"
										id="cc-name"
										required
									/>
									<small className="form-text text-muted">
										Full name as displayed on card
									</small>
									<div className="invalid-feedback">
										Name on card is required
									</div>
								</div>
								<div className="col">
									<label htmlFor="cc-number">
										Credit Card Number
									</label>
									<input
										className="form-control"
										type="text"
										id="cc-number"
										required
									/>
									<div className="invalid-feedback">
										Credit card number is required
									</div>
								</div>
							</div>

							<div className="row">
								<div className="col-md-3 mb-3">
									<label htmlFor="cc-expiration">
										Expiration
									</label>
									<input
										className="form-control"
										type="text"
										id="cc-expiration"
										required
									/>
									<div className="invalid-feedback">
										Expiration date required
									</div>
								</div>
								<div className="col-md-3 mb-3">
									<label htmlFor="cc-cvv">CVV</label>
									<input
										className="form-control"
										type="text"
										id="cc-cvv"
										required
									/>
									<div className="invalid-feedback">
										Security code required
									</div>
								</div>
							</div>

							<hr className="mb-4" />
							<button
								className="btn btn-primary btn-lg btn-block"
								type="submit">
								Continue to checkout
							</button>
						</form>
					</div>

					<div className="col-md-4 order-md-2 mb-4">
						<h4 className="d-flex justify-content-between align-items-center mb-3">
							<span className=" text-muted">Your Cart</span>
							<span className="badge badge-secondary badge-pill">
								3
							</span>
						</h4>
						<ul className="list-group mb-3">
							<Context.Consumer>
								{({ store }) => {
									return store.cart.map((pp, uu) => {
										return (
											<CartItem
												key={uu}
												title={pp.product}
												description={pp.description}
												cost={pp.price}
											/>
										);
									});
								}}
							</Context.Consumer>

							<li className="list-group-item d-flex justify-content-between bg-light">
								<div className="text-success">
									<h6 className="my-0">Promo Code</h6>
									<small className="text-success">
										EXAMPLECODE
									</small>
								</div>
								<span className="text-success">-5</span>
							</li>
							<li className="list-group-item d-flex justify-content-between">
								<div>
									<h6 className="my-0">Total (USD)</h6>
								</div>
								<h6>$20</h6>
							</li>
						</ul>
						<form className="card p-2">
							<div className="input-group">
								<input
									type="text"
									className="form-control"
									placeholder="Promo code"
								/>
								<div className="input-group-append">
									<button
										type="submit"
										className="btn btn-secondary">
										Redeem
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
				<footer className="my-5 pt-5 text-muted text-center text-small">
					<p className="mb-1">© 2017-2018 Company Name</p>
					<ul className="list-inline">
						<li className="list-inline-item">
							<a href="#">Privacy</a>
						</li>
						<li className="list-inline-item">
							<a href="#">Terms</a>
						</li>
						<li className="list-inline-item">
							<a href="#">Support</a>
						</li>
					</ul>
				</footer>
			</div>
		);
	}
}
