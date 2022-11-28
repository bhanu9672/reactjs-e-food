import React from "react";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import {
	Form,
	FormGroup,
	Label,
	Input,
	Button,
	FormText,
	Container,
	Col,
	Row,
} from "reactstrap";
import { HiMailOpen,HiPhoneIncoming,HiLocationMarker } from "react-icons/hi";

const Contact = () => {
	return (
		<>
			<Helmet title="Contact Us">
				<CommonSection title="Contact Us" />
				<Container className="my-5">
					<div className="text-center my-5">
						<h6>Contact Us</h6>
						<h2 style={{ color: "#df2020" }}>Call Us For More Info</h2>
					</div>
					<Row>
						<Col lg="3">
							<Row className="my-5">
								<Col lg="2"><HiLocationMarker style={{ fontSize: 35 }} /></Col>
								<Col lg="10">
									<h6>Location</h6>
									<div>
										<span> 1826 Locust Street, Bainbridge
											London, UK, 11222 </span>
									</div>
								</Col>
							</Row>
							<Row className="my-5">
								<Col lg="2"><HiPhoneIncoming style={{ fontSize: 35 }} /></Col>
								<Col lg="10">
									<h6>Support</h6>
									<div>
										<span> 91+ 0000-0000-00 </span>
									</div>
								</Col>
							</Row>
							<Row className="my-5">
								<Col lg="2">
									<HiMailOpen style={{ fontSize: 35 }} />
								</Col>
								<Col lg="10">
									<h6>Email</h6>
									<div>
										<span> support@gmail.com </span>
									</div>
								</Col>
							</Row>
						</Col>
						<Col lg="9">
							<Form>
								<Row>
									<Col md={6}>
										<FormGroup>
											<Input
												id="name"
												name="password"
												placeholder="Your Name"
												type="text"
												style={{ height: "50px" }}
												required
											/>
										</FormGroup>
									</Col>
									<Col md={6}>
										<FormGroup>
											<Input
												id="email"
												name="email"
												placeholder="Your Email"
												type="email"
												style={{ height: "50px" }}
												required
											/>
										</FormGroup>
									</Col>
								</Row>
								<Row>
									<Col md={6}>
										<FormGroup>
											<Input
												id="name"
												name="phone"
												placeholder="Your Phone"
												type="number"
												style={{ height: "50px" }}
												required
											/>
										</FormGroup>
									</Col>
									<Col md={6}>
										<FormGroup>
											<Input
												id="subject"
												name="subject"
												placeholder="Your Subject"
												type="text"
												style={{ height: "50px" }}
												required
											/>
										</FormGroup>
									</Col>
								</Row>
								<FormGroup row>
									<Col sm={12}>
										<Input
											id="exampleText"
											name="text"
											type="textarea"
											placeholder="Write message :"
											style={{ height: "200px" }}
											required
										/>
									</Col>
								</FormGroup>
								<Button> Send Message </Button>
							</Form>
						</Col>
					</Row>
				</Container>
			</Helmet>
		</>
	)
};

export default Contact;
