import { useParams } from "react-router-dom";
import Products from "../Products/Products";
import "./Category.scss";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../utils/context";

const Category = () => {
  const { id } = useParams();
  const[data, setData] = useState([]);
  const {categories} = useContext(Context);
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    // console.log(id);
    getCategoryData();
    getCategoryNameById(id);
  }, [id]);
  

  function getCategoryNameById(id) {
    // console.log(categories);
    for (let i = 0; i < categories.length; i++) {
      if (categories[i].id == id) {
        setCategoryName(categories[i].category_name.toUpperCase());
        return;
      }
    }
    setCategoryName("CATEGORIES");
    return; 
  }

  //Get Category Data
  const getCategoryData = () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `http://localhost:8080/api/CategoryWiseData/${id}`,
    };

    axios
      .request(config)
      .then((response) => {
        // console.log(response.data);
        setData(response.data);

      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="category-main-content">
      <div className="layout">
        <div className="category-title">{categoryName}</div>
        <Products innerPage={true}  products={data}/>
      </div>
    </div>
  );
};

export default Category;
