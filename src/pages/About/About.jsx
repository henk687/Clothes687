import React from "react"
import "./About.scss"

const About = () => {
  return (
    <div className="about">
      <div className="left">
        <div className="item">
          <span>
          <img src="/img/yellow-heels.jpg" alt="" />
          </span>
        </div>
      </div>
      <div className="right">
        <div className="item">
          <h1>About</h1>
          <span>
            Clothes687 is a fashion industry leader making the latest 
            trends accessible to all while inspiring unique style and 
            confidence. <br />
            With a renewed focus on the customer experience, 
            the brand offers high style designs and fashion basics with 
            compelling values and a dynamic store environment.<br /> 
            While driving innovation across e-commerce and digital 
            to expand access and convenience, the brand continues 
            to strengthen its positioning as today’s preferred 
            destination for the fashionable consumer.
          </span>
        </div>
      </div>
    </div>
  )
}

export default About