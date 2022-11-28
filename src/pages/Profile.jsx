import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from '../contexts/AuthContext'
import { useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom'
import {
    Container,
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    Row,
    Col,
    Card,
    CardTitle,
    CardText,
    Button,
    ListGroup,
    ListGroupItem,
    Table,
    CardBody,
    CardLink,
    CardSubtitle,
    Badge,
    Alert,
} from 'reactstrap'
import User from "../assets/images/user.png"
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import no_order_found from '../assets/images/no_order_found.png'

const Profile = () => {

    const [showSec, SetShowSec] = useState("Dashboard")
    const [enterName, setEnterName] = useState("");
    const [enterEmail, setEnterEmail] = useState("");
    const [enterNumber, setEnterNumber] = useState("");
    const [enterCountry, setEnterCountry] = useState("");
    const [enterCity, setEnterCity] = useState("");
    const [postalCode, setPostalCode] = useState("");

    const shippingInfo = [];
    const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
    const shippingCost = 30;
    const totalAmount = cartTotalAmount + Number(shippingCost);

    const navigator = useNavigate();
    const { currentUser, logout } = useAuth()
    const hadleLogOut = async (e) => {
        e.preventDefault()
        await logout()
        toast.success(`User Log Out Successfully`)
        navigator("/login")
    }

    const [addpress, setAddpress] = useState({});
    const fetchAddpress = async () => {
        return await fetch("https://6372260507858778618be42c.mockapi.io/shopping_address/")
            .then((response) => response.json())
            .then((data) => (
                setAddpress(data)
            ));
    }

    const [orders, setOrders] = useState([]);
    const fetchOrders = async () => {
        return await fetch("https://6372260507858778618be42c.mockapi.io/oders/")
            .then((response) => response.json())
            .then((data) => setOrders(data));
    }

    const submitHandler = (e) => {
        e.preventDefault();

        // Request For User Address
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                login_user_email: user_email,
                name: enterName,
                email: enterEmail,
                phone: enterNumber,
                country: enterCountry,
                city: enterCity,
                postalCode: postalCode,
            })
        };
        fetch('https://6372260507858778618be42c.mockapi.io/shopping_address', requestOptions)
            .then(response => {
                response.json();
                console.log(response);
                toast.success("Address Updated Succefully.")
            })
    };

    useEffect(() => {
        fetchOrders();
    }, [])

    useEffect(() => {
        fetchAddpress();
        console.log(addpress)
    }, [])

    const [user_email, setUser_email] = useState("");
    useEffect(() => {
        if (currentUser) {
            setUser_email(currentUser.email)
        } else {
            navigator("/login")
        }
    }, [currentUser])

    const hadleEditAddpress = (e) => {
        e.preventDefault();

        // Request For User Address
        const requestOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                login_user_email: user_email,
                name: enterName,
                email: enterEmail,
                phone: enterNumber,
                country: enterCountry,
                city: enterCity,
                postalCode: postalCode,
            })
        };
        fetch(`https://6372260507858778618be42c.mockapi.io/shopping_address/${addpress[0].id}`, requestOptions)
            .then(response => {
                response.json();
                console.log(response);
                toast.success("Address Updated Succefully.")
            })
    };

    const filteredOrders = orders.filter(
        (order) => order.orderInfo.user_email == user_email
    );

    return (
        <Helmet title="My Account">
            <CommonSection title="My Account" />
            <Toaster
                position="bottom-center"
                reverseOrder={false}
            />
            <div className='my-5'>
                <Container>
                    <Row>
                        <Col lg="4">
                            <h3 className='mb-5'> My Account </h3>
                            <ListGroup>
                                <ListGroupItem
                                    action
                                    tag="button"
                                    onClick={(e) => SetShowSec("Dashboard")}
                                    className={`${showSec == "Dashboard" && 'active'}`}
                                >
                                    Dashboard
                                </ListGroupItem>
                                <ListGroupItem
                                    action
                                    tag="button"
                                    onClick={(e) => SetShowSec("Orders")}
                                    className={`${showSec == "Orders" && 'active'}`}
                                >
                                    Orders
                                </ListGroupItem>
                                <ListGroupItem
                                    action
                                    tag="button"
                                    onClick={(e) => SetShowSec("Payment Method")}
                                    className={`${showSec == "Payment Method" && 'active'}`}
                                >
                                    Payment Method
                                </ListGroupItem>
                                <ListGroupItem
                                    action
                                    tag="button"
                                    onClick={hadleLogOut}
                                >
                                    Logout
                                </ListGroupItem>
                            </ListGroup>
                        </Col>
                        <Col lg="8" className='text-center'>
                            <Row>
                                <Col>
                                    {
                                        showSec == "Dashboard" &&
                                        <>
                                            <Card className='p-5'>
                                                <CardTitle tag="h1">
                                                    Dashboard
                                                </CardTitle>
                                                <CardText>
                                                    <h5>Hello, <span style={{ color: "red" }}>
                                                        {currentUser && currentUser.displayName} ( {currentUser && currentUser.email} )</span>
                                                    </h5>
                                                    <img src={User} />
                                                    <p>From your account dashboard. you can easily check & view your recent orders, manage your shipping and billing addresses and Show account details And Logout From Your Account.</p>
                                                </CardText>
                                                {
                                                    currentUser &&
                                                    <>
                                                        <Badge style={{ width: "350px", padding: "10px 100", margin: "auto" }} className='py-3' color="info">
                                                            <div>Last Sign In{currentUser.metadata.lastSignInTime}</div>
                                                        </Badge>
                                                    </>
                                                }
                                                <Link className='order__btn w-50 py-2 m-auto mt-4' to="/foods">
                                                    Back To Shoping
                                                </Link>
                                            </Card>
                                        </>
                                    }
                                    {
                                        showSec == "Orders" &&
                                        <>
                                            <h4 className='mb-5' style={{ color: "#df2020" }}>Your Orders List</h4>
                                            {
                                                filteredOrders.length > 0 ?
                                                    <>
                                                        <Table bordered>
                                                            <thead>
                                                                <tr>
                                                                    <th>
                                                                        No
                                                                    </th>
                                                                    <th>
                                                                        Name
                                                                    </th>
                                                                    <th>
                                                                        Date
                                                                    </th>
                                                                    <th>
                                                                        Status
                                                                    </th>
                                                                    <th>
                                                                        Total
                                                                    </th>
                                                                    <th>
                                                                        Action
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {
                                                                    filteredOrders.map((order, index) => (
                                                                        <>
                                                                            <tr key={order.id}>
                                                                                <th scope="row">{order.id}</th>
                                                                                <td>
                                                                                    {order.address.name}
                                                                                </td>
                                                                                <td>
                                                                                    {order.orderInfo.date}
                                                                                </td>
                                                                                <td>
                                                                                    <Badge color="success">
                                                                                        {order.orderInfo.status}
                                                                                    </Badge>
                                                                                </td>
                                                                                <td>
                                                                                    $ {order.orderInfo.totalAmount}
                                                                                </td>
                                                                                <td>
                                                                                    View
                                                                                </td>
                                                                            </tr>
                                                                        </>
                                                                    ))
                                                                }
                                                            </tbody>
                                                        </Table>
                                                    </>
                                                    :
                                                    <>
                                                        <Alert color="warning" className='m-5 p-5'>
                                                            <h5>No, Order Found</h5>
                                                            <img
                                                                style={{ width: "30%" }}
                                                                src={no_order_found}
                                                                alt="No Order Found Img"
                                                            />
                                                            <h5 className='mb-5'>Look like you have not place order your order yet.</h5>
                                                            <h4 className='my-1'>
                                                                <Link
                                                                    className='my-1'
                                                                    style={{ color: "#df2020", border: "4px solid #df2020", padding: "5px" }}
                                                                    to='/foods'
                                                                >
                                                                    Back To Shoping
                                                                </Link>
                                                            </h4>
                                                        </Alert>
                                                    </>
                                            }
                                        </>
                                    }
                                    {
                                        showSec == "Payment Method" &&
                                        <>
                                            <Card>
                                                <CardBody>
                                                    <CardTitle tag="h3" style={{ color: "red" }}>
                                                        Payment Method
                                                    </CardTitle>
                                                    <CardText className='my-3'>
                                                        You Can't Saved Your Payment Method yet.
                                                    </CardText>
                                                </CardBody>
                                            </Card>
                                        </>
                                    }
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Helmet>
    )
}

export default Profile
