import React, { useEffect, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from "react-router-dom";

const Register = () => {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const navigate = useNavigate()
	const { register, currentUser } = useAuth();

	const submitHandler = async (e) => {
		e.preventDefault();
		// User Register Logic Write Here
		register(email, password)
			.then((response) => {
				console.log(response)
				toast.success(`Account CReate Successfully With Email`)
				navigate("/login")
			})
			.catch((error) => {
				console.log(error.message)
				toast.error(error.message)
			})
		console.log(email, password)
	};

	useEffect(() => {
		if (currentUser) {
			navigate("/profile")
		}
	})

	return (
		<Helmet title="Signup">
			<CommonSection title="Signup" />
			<section>
				<Toaster
					position="top-center"
					reverseOrder={false}
				/>
				<Container>
					<Row>
						<Col lg="6" md="6" sm="12" className="m-auto text-center">
							<h3 className="mb-5">Create Account</h3>
							<form className="form mb-5" onSubmit={submitHandler}>
								<div className="form__group">
									<input
										type="email"
										placeholder="Email"
										value={email}
										onChange={e => setEmail(e.target.value)}
									/>
								</div>
								<div className="form__group">
									<input
										type="password"
										placeholder="Password"
										value={password}
										onChange={e => setPassword(e.target.value)}
									/>
								</div>
								<button type="submit" className="addTOCart__btn">
									Sign Up
								</button>
							</form>
							<Link to="/login"><h6 className="my-4">Already have an account? Login</h6></Link>
						</Col>
					</Row>
				</Container>
			</section>
		</Helmet>
	);
};

export default Register;
