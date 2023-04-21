import { useContext, useEffect, useState } from "react";
import { Context } from "../../utils/context";
import { useParams } from "react-router-dom";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import "./SingleProduct.scss";
import producstImg from "../../assets/products/earbuds-prod-1.webp";
import axios from "axios";

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { handleAddToCart } = useContext(Context);
  const [data, setData] = useState([]);
  const {categories} = useContext(Context);
  const [product, setProduct] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [categoryId, setCategoryId] = useState(0);

  useEffect(() => {
    getProductData(id);
  }, [id])

  function getCategoryNameById(id) {
    for (let i = 0; i < categories.length; i++) {
      if (categories[i].id == id) {
        setCategoryName(categories[i].category_name.toUpperCase());
        return;
      }
    }
    setCategoryName("GENERAL");
    return; 
  }
  

   //Get Product Data
   const getProductData = (id) => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: process.env.REACT_APP_SERVER_URL+`api/products/${id}`,
    };

    axios
      .request(config)
      .then((response) => {
        // console.log(response.data);
        setData(response.data);
        setProduct(response.data);
        getCategoryNameById(response.data[0].category_id);
        setCategoryId(response.data[0].category_id);
      })
      .catch((error) => {
        console.log(error);
      });
  };



  const decrement = () => {
    setQuantity((prevState) => {
      if (prevState === 1) return 1;
      return prevState - 1;
    });
  };
  const increment = () => {
    setQuantity((prevState) => prevState + 1);
  };

  if (!data) return;
  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src={producstImg} alt="" />
          </div>
          <div className="right">
            <span className="name">{product[0]?.Title}</span>
            <span className="price">&#8377;{product[0]?.Price}</span>
            <span className="desc">{product[0]?.Description}</span>

            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span onClick={decrement}>-</span>
                <span>{quantity}</span>
                <span onClick={increment}>+</span>
              </div>
              <button
                className="add-to-cart-button"
                onClick={() => {
                  handleAddToCart(data[0], quantity);
                  setQuantity(1);
                }}
              >
                <FaCartPlus size={20} />
                ADD TO CART
              </button>
            </div>

            <span className="divider" />
            <div className="info-item">
              <span className="text-bold">
                Category:{" "}
                <span>{categoryName}</span>
              </span>
              <span className="text-bold">
                Share:
                <span className="social-icons">
                  <FaFacebookF size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedinIn size={16} />
                  <FaPinterest size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
        {/* <RelatedProducts
          productId={id}
          categoryId={data[0]?.categoryId}
        /> */}
      </div>
    </div>
  );
};

export default SingleProduct;
