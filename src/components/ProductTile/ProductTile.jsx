import React from "react";
import './styles.css'

const ProductTile = (props) => {
  const { src, name, price, description, height = '250px', width = '200px' } = props;
  return (
    <div className="card">
        <div className="card-image centerContent">
          <img src={src} alt="" style={{ width, height }} />
        </div>
        <div className="card-content">
            <div className="title product-title">{name}</div>
            {price && <div className="title product-price">£{price}</div>}
            {description && <div className="card-description">{description}</div>}
        </div>
    </div>
  )
}

export default ProductTile;