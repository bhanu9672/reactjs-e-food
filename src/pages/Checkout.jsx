import React, { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col, List, Button } from "reactstrap";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import "../styles/checkout.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext'
import toast, { Toaster } from 'react-hot-toast';

const Checkout = () => {
	const [enterName, setEnterName] = useState("");
	const [enterEmail, setEnterEmail] = useState("");
	const [enterNumber, setEnterNumber] = useState("");
	const [enterCountry, setEnterCountry] = useState("");
	const [enterCity, setEnterCity] = useState("");
	const [postalCode, setPostalCode] = useState("");

	const { currentUser } = useAuth()
	const [user_email, setUser_email] = useState("");
	
	const navigator = useNavigate();
	useEffect(() => {
		if (currentUser) {
			setUser_email(currentUser.email)
		} else {
			navigator( "/login" )
		}
	}, [currentUser])

	const shippingInfo = [];
	const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
	const shippingCost = 30;

	const totalAmount = cartTotalAmount + Number(shippingCost);

	const cartItems = useSelector((state) => state.cart.cartItems);

	const current = new Date();
	const date = `${current.getDate()}-${current.getMonth() + 1}-${current.getFullYear()}`;

	console.log(cartItems)

	const submitHandler = (e) => {
		e.preventDefault();
		const userShippingAddress = {
			name: enterName,
			email: enterEmail,
			phone: enterNumber,
			country: enterCountry,
			city: enterCity,
			postalCode: postalCode,
		};

		const orderInfo = {
			user_email: user_email,
			totalAmount: totalAmount,
			status: "Order Place",
			date: date
		}

		// POST request using fetch with set headers
		const requestOptions = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json; charset=UTF-8',
			},
			body: JSON.stringify({
				orderInfo: orderInfo,
				address: userShippingAddress,
				cartItems: cartItems,
			})
		};
		fetch('https://6372260507858778618be42c.mockapi.io/oders', requestOptions)
			.then(response => {
				response.json();
				toast.success( "Your Order Placed Succefully." )
				navigator( '/profile' );
			})

		shippingInfo.push(userShippingAddress);
		console.log(shippingInfo);
		console.log(cartItems)
	};

	return (
		<Helmet title="Checkout">
			<CommonSection title="Checkout" />
			<Toaster
                position="bottom-center"
                reverseOrder={false}
            />
			<section>
				<Container>
					<Row>
						<Col lg="8" md="6">
							<h6 className="mb-4">Shipping Address</h6>
							<form className="checkout__form" onSubmit={submitHandler}>
								<div className="form__group">
									<input
										type="text"
										placeholder="Enter your name"
										required
										onChange={(e) => setEnterName(e.target.value)}
									/>
								</div>
								<div className="form__group">
									<input
										type="email"
										placeholder="Enter your email"
										required
										onChange={(e) => setEnterEmail(e.target.value)}
									/>
								</div>
								<div className="form__group">
									<input
										type="number"
										placeholder="Phone number"
										required
										onChange={(e) => setEnterNumber(e.target.value)}
									/>
								</div>
								<div className="form__group">
									<input
										type="text"
										placeholder="Country"
										required
										onChange={(e) => setEnterCountry(e.target.value)}
									/>
								</div>
								<div className="form__group">
									<input
										type="text"
										placeholder="City"
										required
										onChange={(e) => setEnterCity(e.target.value)}
									/>
								</div>
								<div className="form__group">
									<input
										type="number"
										placeholder="Postal code"
										required
										onChange={(e) => setPostalCode(e.target.value)}
									/>
								</div>
								<button type="submit" className="addTOCart__btn">
									Payment
								</button>
								<button type="submit" className="addTOCart__btn mx-2">
									<Link style={{ color: "white" }} to="/cart">Back To Cart</Link>
								</button>
							</form>
						</Col>
						<Col lg="4" md="6">
							<div className="checkout__bill">
								<h6 className="d-flex align-items-center justify-content-between mb-3">
									Subtotal: <span>${cartTotalAmount}</span>
								</h6>
								<h6 className="d-flex align-items-center justify-content-between mb-3">
									Shipping Fee : <span>${shippingCost}</span>
								</h6>
								<div className="checkout__total">
									<h5 className="d-flex align-items-center justify-content-between">
										Total: <span>${totalAmount}</span>
									</h5>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</Helmet>
	);
};

export default Checkout;
