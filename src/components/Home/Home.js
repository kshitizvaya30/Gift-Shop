import React from "react";
import Products from "../Products/Products";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import "./Home.scss";


function Home() {
  return (
    <div>
        <Banner />
        <div className="main-content">
            <div className="layout">
                <Category />
                <Products headingText = "Popular Products"/>
            </div>
        </div>
    </div>
);
}

export default Home;
