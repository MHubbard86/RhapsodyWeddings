import React from "react";
import './styles.css'

const ProductTile = (props) => {
  const { image, name, price, description } = props;
  return (
    <div className="card">
        <div className="card-image centerContent">
            <div style={{ width: '200px', height: '250px' }}>
                <img src={image} alt="" />
            </div>
        </div>
        <div className="card-content">
            <div className="title product-title">{name}</div>
            <div className="title product-price">£{price}</div>
            <div className="card-description">{description}</div>
        </div>
    </div>
  )
}

export default ProductTile;