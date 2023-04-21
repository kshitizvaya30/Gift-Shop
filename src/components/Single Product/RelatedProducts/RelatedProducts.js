import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { Context } from "../../../utils/context";
import Products from "../../Products/Products";

const RelatedProducts = ({ categoryId, productId }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(categoryId);
//     getCategoryData();
  }, []);

  //Get Category Data
  const getCategoryData = (categoryId) => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `http://localhost:8080/api/CategoryWiseData/${categoryId}`,
    };

    axios
      .request(config)
      .then((response) => {
        console.log("related Products", response.data);
        setData(response.data.filter(item => item.productid !== productId));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="related-products">
      <Products headingText="Related Products" products={data} />
    </div>
  );
};

export default RelatedProducts;
