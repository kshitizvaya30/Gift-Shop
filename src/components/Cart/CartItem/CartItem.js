import React, { useContext } from "react";
import { MdClose } from "react-icons/md";
// import prod from "../.../../../../assets/products/earbuds-prod-1.webp";
import "./CartItem.scss";
import { Context } from "../../../utils/context";

const CartItem = () => {
  const { cartItems, handleCartProductQuantity, handleRemoveFromCart } =
    useContext(Context);
    
  return (
    <div className="cart-products">
      {cartItems.map((item) => {
        return (
          <div key={item.id} className="cart-product">
            <div className="img-container">
              <img src={"https://drive.google.com/uc?export=view&id=" + item?.image_url} alt="" />
            </div>
            <div className="prod-details">
              <span className="name"> {item.Title}</span>
              <MdClose className="close-btn" onClick={() => {handleRemoveFromCart(item)}}/>
              <div className="quantity-buttons">
                <span onClick={() => {handleCartProductQuantity('dec', item)}}>-</span>
                <span>{item.quantity}</span>
                <span onClick={() => {handleCartProductQuantity('inc', item)}} >+</span>
              </div>
              <div className="text">
                <span>{item.quantity}</span>
                <span>x</span>
                <span className="highlight">&#8377;{item.Price * item.quantity}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartItem;
