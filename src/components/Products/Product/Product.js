import React from "react";
import "./Product.scss";
import producstImg from "../../../assets/products/earbuds-prod-1.webp";

const Product = () => {
  return (
    <div className="product-card">
      <div className="thumbnail">
        <img src={producstImg}  alt="" />
      </div>
      <div className="prod-details">
        <span className="name">Boat Bsw201</span>
        <span className="price">&#8377; 4000</span>
      </div>
    </div>
  );
};

export default Product;
