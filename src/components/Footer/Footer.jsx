import React from "react"
import { Link } from "react-router-dom";
import "./Footer.scss"

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span><Link className ="link" to="/products/1">Women</Link></span>
          <span><Link className ="link" to="/products/2">Men</Link></span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span><Link className ="link" to="/">Home</Link></span>
          <span><Link className ="link" to="/about">About</Link></span>
          <span><Link className ="link" to="/contactpage">Contact</Link></span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Clothes687 is a fashion industry leader making the latest 
            trends accessible to all while inspiring unique style and 
            confidence.
          </span>
        </div>
        
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">CLOTHES 687</span>
          <span className="copyright">&copy; {new Date().getFullYear()}. All Rights Reserved</span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer