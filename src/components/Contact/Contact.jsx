import React from "react"
import "./Contact.scss"

const Contact = () => {

  return (
      <div className="contact">
        <div className="wrapper">
          <span>RECIEVE OUR NEWSLETTER</span>
          <div className="mail">
            <input type="text" placeholder="Enter your e-mail..."/>
            <button>JOIN US</button>
          </div>
        </div>
      </div>
  )
}

export default Contact