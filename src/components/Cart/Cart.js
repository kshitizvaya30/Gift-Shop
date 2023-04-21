import React, { useContext, useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import "./Cart.scss";
import { Context } from "../../utils/context";
import CartItem from "./CartItem/CartItem";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Cart = ({ setShowCart }) => {
  const { cartItems, setCartItems, cartCount, cartSubTotal } =
    useContext(Context);
  const [emailAddress, setEmailAddress] = useState("");
  const navigate = useNavigate();
  

  const handleCheckOut = () => {
    if (validateEmail(emailAddress)) {
      const data = {
        email: emailAddress,
        cartItems: cartItems,
      };
      console.log(data);

      let config = {
        method: "POST",
        url: process.env.REACT_APP_SERVER_URL + "api/addOrder",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      axios
        .post(process.env.REACT_APP_SERVER_URL + "api/addOrder", data)
        .then((resp) => {
          console.log(JSON.stringify(resp.data));
          setCartItems([]);
          setShowCart(false);
          navigate("./success");
          // console.log("Success Page");
        });
    } else {
      alert("Please enter a valid email address.");
    }
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <div className="cart-panel">
      <div className="opac-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span className="close-btn" onClick={() => setShowCart(false)}>
            <MdClose />
            <span className="text">close</span>
          </span>
        </div>

        {!cartItems?.length && (
          <div className="empty-cart">
            <BsCartX />
            <span> No products in the Cart</span>
            <button className="return-cta">return to shop</button>
          </div>
        )}
        {!!cartItems?.length && (
          <>
            <CartItem />
            <div className="cart-footer">
              <div className="email">
                {" "}
                <input
                  type="email"
                  required
                  placeholder="example@gmail.com"
                  value={emailAddress}
                  onChange={(event) => setEmailAddress(event.target.value)}
                />
              </div>
              <div className="subtotal">
                <span className="text">Subtotal : </span>
                <span className="text total">&#8377; {cartSubTotal}</span>
              </div>
              <div className="button">
                <button className="checkout-cta" onClick={handleCheckOut}>
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
