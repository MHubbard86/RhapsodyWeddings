import React from "react";
import './styles.css'

const ProductTile = (props) => {
  const { image, name, description } = props;
  return (
    <div className="card">
        <div className="card-image centerContent">
            <figure style={{ width: '200px', height: '250px' }}>
                <img src={image} alt="" />
            </figure>
        </div>
        <div className="card-content">
            <p className="title product-title">{name}</p>

            <div className="content">
                {description}
                <br></br>
            </div>
        </div>
    </div>
  )
}

export default ProductTile;