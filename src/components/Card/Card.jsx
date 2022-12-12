import React from "react"
import "./Card.scss"
import {Link} from "react-router-dom"

const Card = ({item}) => {

  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {item?.attributes.isNew && <span>New Season</span>}
          <img 
            src={
              // process.env.REACT_APP_UPLOAD_URL + item.attributes?.img?.data?.attributes?.url
              "https://res.cloudinary.com/dts2zdpa2/image/upload/v1652351438/SAM_2339_kg6cb2.jpg"
            } 
            alt={item?.attributes.title} 
            className="mainImg"
          />
        </div>
        <h2>{item?.attributes.title}</h2>
        <div className="prices">
          <h3>${item?.attributes.price}</h3>
        </div>
      </div>
    </Link>
    
  )
}

export default Card