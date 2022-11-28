import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { health_solution,our_service } from '../assets/fake-data/products'
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import Apple from '../assets/images/apple.png'
import service_bg from '../assets/images/service_bg.png'

const Service = () => {
    console.log(health_solution)
    return (
        <>
            <Helmet title="Service">
                <CommonSection title="Service" />
                <Container>
                    <Row className='my-5 py-5'>
                        <Col className='text-center' lg="auto">
                            <img
                                className=''
                                src={Apple}
                                alt=''
                            />
                            <h1>Amazing Health Solution Whatever Your Needs</h1>
                            <p>Lorem ipsum dolor amet consectetur adipisicing elit, sed do eiusmtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris.</p>
                        </Col>
                        <Col>
                            <Row className='text-center'>
                                {
                                    health_solution.map((health_solution) => (
                                        <>
                                            <Col lg="3" className='mt-4'>
                                                <img src={health_solution.img} />
                                                <h4 className='my-3'>{health_solution.title}</h4>
                                                <p>{health_solution.desc}</p>
                                            </Col>
                                        </>
                                    ))
                                }
                            </Row>
                        </Col>
                    </Row>
                </Container>

                <section style={{ backgroundImage: `url(${service_bg})`, margin : "50px 0px" }}>
                    <Container>
                        <Row className='my-5 py-5'>
                            <Col className='text-center' lg="12">
                                <img
                                    className=''
                                    src={Apple}
                                    alt=''
                                />
                                <h1>Our Service</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmotempor incididunt labore dolore magna aliqua minim veniam</p>
                            </Col>
                            <Col lg="12">
                                <Row className='text-center'>
                                    {
                                        our_service.map((our_service) => (
                                            <>
                                                <Col lg="4" className='mt-4'>
                                                    <img src={our_service.img} />
                                                    <h4 className='my-3'>{our_service.title}</h4>
                                                    <p>{our_service.desc}</p>
                                                </Col>
                                            </>
                                        ))
                                    }
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Helmet>
        </>
    )
}

export default Service
