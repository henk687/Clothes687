import React, { useState } from "react"
import "./Slider.scss"

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const data = [
    "/img/blue-dress.jpg",
    "/img/women-bag.jpg",
    "/img/grey-costume.jpg",
  ]

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : prev => prev - 1)
  }

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : prev => prev + 1)
  }

  return (
    <div className="slider">
      <div className="container" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt="blue dress" />
        <img src={data[1]} alt="women bag" />
        <img src={data[2]} alt="grey costume" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <i class="fas fa-arrow-left"></i>
        </div>
        <div className="icon" onClick={nextSlide}>
          <i class="fas fa-arrow-right"></i>
        </div>
      </div>
    </div>
  )
}

export default Slider