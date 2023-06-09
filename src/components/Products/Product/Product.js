import React from "react";
import "./Product.scss";
import producstImg from "../../../assets/products/earbuds-prod-1.webp";
import {useNavigate} from 'react-router-dom'

const Product = ({product, id}) => {
  const navigate = useNavigate();
  return (
    <div className="product-card" onClick={() => navigate('/products/'+id)}>
      <div className="thumbnail">
        <img src={"https://drive.google.com/uc?export=view&id=" + product.image_url}  alt={product.id} />
      </div>
      <div className="prod-details">
        <span className="name">{product.Title}</span>
        <span className="price">&#8377; {product.Price}</span>
      </div>
    </div>
  );
};

export default Product;
