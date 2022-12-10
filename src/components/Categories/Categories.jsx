import React from "react"
import "./Categories.scss"
import {Link} from "react-router-dom"

const Categories = () => {

  return (
      <div className="categories">
        <div className="col">
          <div className="row">
            <img src="/img/yellow-shirt.jpg" alt="" />
            <button>
              <Link className="link" to="/products/1">Sale</Link>
            </button>
          </div>
          <div className="row">
            <img src="/img/dress.jpg" alt="" />
            <button>
              <Link className="link" to="/products/1">Women</Link>
            </button>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <img src="/img/blue-shirt.jpg" alt="" />
            <button>
              <Link className="link" to="/products/2">Men</Link>
            </button>
          </div>
        </div>
        <div className="col col-l">
          <div className="row">
            <div className="col">
              <div className="row">
                <img src="/img/women-bag.jpg" alt="" />
                <button>
              <Link className="link" to="/products/3">Accessoires</Link>
            </button>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <img src="/img/jeans.jpg" alt="" />
                <button>
                  <Link className="link" to="/products/1">New Season</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <img src="/img/yellow-heels.jpg" alt="" />
            <button>
              <Link className="link" to="/products/4">Shoes</Link>
            </button>
          </div>
        </div>
      </div>
  )
}

export default Categories