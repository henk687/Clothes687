import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss"
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [open,setOpen] = useState(false)
  const products = useSelector((state) => state.cart.products);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <Link className ="link" to="/products/1">Women</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/2">Men</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/3">Accessoires</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/4">Shoes</Link>
          </div>
        </div>
        <div className="center">
          <Link className ="link" to="/">CLOTHES 687</Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className ="link" to="/">Home</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/about">About</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/contactpage">Contact</Link>
          </div>
          <div className="icons">
            <div className="cartIcon" onClick={()=>setOpen(!open)}>
              <i class="fas fa-shopping-cart"></i>
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart/>}
    </div>
  );
};

export default Navbar;