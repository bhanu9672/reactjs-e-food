import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Col, Container, Row } from 'reactstrap'
import img_404_found from "../assets/images/page_not_found.png"
import Helmet from "../components/Helmet/Helmet";

const PageNotFound = () => {
    return (
        <>
            <Helmet title="404 Page">
                <Container className='text-center my-5'>
                    <Row>
                        <Col lg="12">
                            <img
                                style={{ height: "150px" }}
                                src={img_404_found}
                                alt=''
                            />
                            <h2 className='my-3' style={{ color: "#df2020" }}>OOPS!</h2>
                            <h4 className='my-3'>Page Not Found</h4>
                            <button className='p-2 my-2'>
                                <Link to="/">Go To Home Page</Link>
                            </button>
                        </Col>
                    </Row>
                </Container>
            </Helmet>
        </>
    )
}

export default PageNotFound
