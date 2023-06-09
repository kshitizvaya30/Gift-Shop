import React, { useEffect, useContext, useState } from "react";

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

import { Context } from "../../utils/context";
import "./Header.scss";
import Cart from "../Cart/Cart";
import Search from "./Search/Search";
import { useNavigate } from "react-router-dom";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();
  const {cartCount} = useContext(Context);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handlecategories = () => {
    window.scrollTo({
      top: 800,
      behavior: "smooth"
    });
  };

  const handleScroll = () => {
    const offSet = window.scrollY;
    if (offSet > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return (
    <>
    <header className={`main-header ${scrolled ? 'sticky-header' : ''}`}>
      <div className="header-content">
        <ul className="left">
          <li onClick={() => {navigate('/')}}>Home</li>
          <li>About</li>
          <li onClick={handlecategories}>Category</li>
        </ul>
        <div className="center" onClick={() => {navigate('/')}}>GIFTers</div>
        <div className="right">
          <TbSearch onClick={() => {setShowSearch(true)}}/>
          <AiOutlineHeart />
          <span className="cart-icon" onClick={() => setShowCart(true)}>
            <CgShoppingCart />
            {!!cartCount && <span>{cartCount}</span>}
          </span>
        </div>
      </div>
    </header>
    {showCart && <Cart setShowCart={setShowCart} />}
    {showSearch && <Search setShowSearch={setShowSearch}/>}
    </>
  );
}

export default Header;
