import React from "react";
import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { cartUiActions } from "../../../store/shopping-cart/cartUiSlice";
import EmptyCart from "../../../assets/images/empty-cart.png"
import "../../../styles/shopping-cart.css";

const Carts = () => {
	const dispatch = useDispatch();
	const cartProducts = useSelector((state) => state.cart.cartItems);
	const totalAmount = useSelector((state) => state.cart.totalAmount);

	const toggleCart = () => {
		dispatch(cartUiActions.toggle());
	};
	return (
		<div className="cart__container">
			<ListGroup className="cart">
				<div className="cart__close">
					<span onClick={toggleCart}>
						<i className="ri-close-fill"></i>
					</span>
				</div>
				<div className="cart__item-list">
					{cartProducts.length === 0 ? (
						<>							
						<img
							src={EmptyCart}
							className="w-100 h-auto"
						/>
							<h3 className="text-center mt-5">Your Cart is Empty!</h3>
							<div className="cart__bottom d-flex align-items-center justify-content-center">
								<button>
									<Link to="/foods" onClick={toggleCart}>
										Shop Now
									</Link>
								</button>
							</div>
						</>
					) : (
						cartProducts.map((item, index) => (
							<>
								<CartItem item={item} key={index} />
								<div className="cart__bottom d-flex align-items-center justify-content-between">
									<h6>
										Subtotal : <span>${totalAmount}</span>
									</h6>
									<button>
										<Link to="/checkout" onClick={toggleCart}>
											Checkout
										</Link>
									</button>
								</div>
							</>
						))
					)}
				</div>
			</ListGroup>
		</div>
	);
};

export default Carts;
