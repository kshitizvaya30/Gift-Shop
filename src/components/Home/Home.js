import React, { useEffect, useState , useContext} from "react";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";
import Products from "../Products/Products";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import "./Home.scss";


function Home() {
    const [data, setdata] = useState(true);
    const {categories, setCategories, products, setProducts} = useContext(Context);
    useEffect(() => {
      getCategories();
      getProducts();
    },[data])

    const getCategories = () => {
        fetchDataFromApi("api/categories").then((res) => {
            // console.log("categories" , res);
            setCategories(res);
        });
    }

    const getProducts = () => {
        fetchDataFromApi("api/products").then((res) => {
            // console.log("products" , res);
            setProducts(res);
        });
    }
    
  return (
    <div>
        <Banner />
        <div className="main-content">
            <div className="layout">
                <Category categories={categories} />
                <Products headingText = "Popular Products" products={products}/>
            </div>
        </div>
    </div>
);
}

export default Home;
