import React, { useState,useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

const Login = () => {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const { login, signInWithGoogle, currentUser } = useAuth();
	const navigate = useNavigate()

	const submitHandler = async (e) => {
		e.preventDefault();
		login(email, password)
			.then((response) => {
				console.log(response)
				toast.success(`User Login`)
				navigate("/Profile")
			})
			.catch((error) => {
				console.log(error.message)
				toast.error(error.message)
			})
	};

	const handleSignInWithGoogle = async () => {
		signInWithGoogle().then(user => {
			console.log(user)
			toast.success(`User Sign Google Successfully`)
			navigate("/profile")
		}).catch(error => {
			console.log(error)
		})
	}

	useEffect(() => {
		if (currentUser) {
			navigate("/profile")
		}
	})

	return (
		<Helmet title="Login">
			<CommonSection title="Login" />
			<section>
				<Container>
					<Toaster
						position="top-center"
						reverseOrder={false}
					/>
					<Row>
						<Col lg="6" md="6" sm="12" className="m-auto text-center">
							<h3 className="mb-5">Login Now</h3>
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
									Login
								</button>
							</form>
							<button className="my-2 p-2" style={{ "color": "red", border: "1px solid red" }} onClick={handleSignInWithGoogle}>
								Sign In With Google
							</button><br></br>
							<Link to="/register">
								<h6 className="my-4">Don't have an account? Create an account</h6>
							</Link>
							<hr />
							<Link to="/forgot-password">
								<h4 className="my-4">Forgot Password</h4>
							</Link>
						</Col>
					</Row>
				</Container>
			</section>
		</Helmet>
	);
};

export default Login;
