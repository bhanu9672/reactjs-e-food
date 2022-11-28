import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Container,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    CardText,
    CardFooter,
    Col,
} from 'reactstrap'
import { useAuth } from '../contexts/AuthContext'
import toast, { Toaster } from 'react-hot-toast';
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";

const ForgotPasswordPage = () => {

    const [email, setEmail] = useState('')
    const { forgotPassword } = useAuth();

    const hadaleForgetPassword = async (e) => {
        e.preventDefault()
        // your login logic here
        try {
            await forgotPassword(email)
            toast.success(`An email is sent to ${email} for password reset instructions.`)
        } catch (error) {
            console.log(error.message)
            console.log("Error Sec 2 Run")
            toast.error(error.message)
        }
    }

    return (
        <>
            <Helmet title="Forgot Password">
                <CommonSection title="Forgot Password" />
                <Container style={{ "justifyContent": "center", "display": 'flex', "textAlign": "center" }}>
                    <Toaster
                        position="top-center"
                        reverseOrder={false}
                    />
                    <Col
                        sm={{
                            offset: 1,
                            size: 6
                        }}>
                        <Card className="my-3">
                            <CardHeader>
                                <CardTitle tag="h5">
                                    Forgot Password Form
                                </CardTitle>
                            </CardHeader>
                            <CardBody className='m-5'>
                                <Form onSubmit={hadaleForgetPassword}>
                                    <FormGroup style={{ "textAlign": "left" }}>
                                        <Label for="exampleEmail">
                                            Email Address
                                        </Label>
                                        <Input
                                            id="exampleEmail"
                                            name="email"
                                            placeholder="Enter Email"
                                            type="email"
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                        />
                                    </FormGroup>
                                    <Button type='submit' className='my-3'>
                                        Forgot Password
                                    </Button>
                                </Form>
                                <h4 className='my-2'> OR </h4>
                                <Link to="/login">
                                    <CardTitle tag="h3">
                                        Login Now
                                    </CardTitle>
                                </Link>
                            </CardBody>
                        </Card>
                    </Col>
                </Container>
            </Helmet>
        </>
    )
}

export default ForgotPasswordPage
