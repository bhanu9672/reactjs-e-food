import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import "../../../styles/common-section.css";
import { Link } from "react-router-dom";

const CommonSection = (props) => {
	return (
		<section className="common__section">
			<Container>
				<Row xs="2">
					<Col>
						<>
							<Breadcrumb listTag="div">
								<Link to={"/home"}>
									<h6 className="text-white">Home</h6>
								</Link>
								<h6 className="text-white mx-3">/</h6>
								<h6 className="text-white">{props.title}</h6>
							</Breadcrumb>
						</>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default CommonSection;
