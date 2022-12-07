import React from "react"
import { Link } from "react-router-dom";
import ContactForm from "../../components/ContactForm/ContactForm";
import "./Contact.scss"

const Contact = () => {
  return (
    <div className="contactpage">
      <div className="left">

        <div className="item">
          <span>
          <img src="/img/travel-bag.jpg" alt="" />
          </span>
        </div>
      </div>
      <div className="right">

        <div className="item">
          <h1>Contact</h1>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Contact