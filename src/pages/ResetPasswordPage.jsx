import React from 'react'
import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
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

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
    return new URLSearchParams(useLocation().search)
}

const ResetPasswordPage = () => {

    const { resetPassword } = useAuth()
    const query = useQuery()
    const navigate = useNavigate()
    const [password, setPassword] = useState('')

    console.log(query.get('mode'), query.get('oobCode'))

    const hadaleRestPassword = async (e) => {
        e.preventDefault()
        // your login logic here
        try {
            await resetPassword(query.get('oobCode'), password)
            toast.success(`'Password has been changed, you can login now.`)
            navigate("/login")
        } catch (error) {
            console.log(error.message)
            console.log("Error Sec 2 Run")
            toast.error(error.message)
        }
    }

    return (
        <Helmet title="Reset Password">
            <CommonSection title="Reset Password" />
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
                                Reset Password Form
                            </CardTitle>
                        </CardHeader>
                        <CardBody className='m-5'>
                            <Form onSubmit={hadaleRestPassword}>
                                <FormGroup style={{ "textAlign": "left" }}>
                                    <Label for="exampleEmail">
                                        Email Address
                                    </Label>
                                    <Input
                                        id="exampleEmail"
                                        name="email"
                                        placeholder="Enter Email"
                                        type="email"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                </FormGroup>
                                <Button type='submit' className='my-3'>
                                    Reset Password
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
    )
}

export default ResetPasswordPage
