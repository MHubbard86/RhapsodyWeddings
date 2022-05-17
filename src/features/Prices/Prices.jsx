import React from "react";
import ProductTile from '../../components/ProductTile/ProductTile';
import PriceList from './PriceList';

export default function Prices() {
  return (
    <>
      <h1>Pricing</h1>
      <div className="product-list-grid-wrap" style={{ width: '100%', marginTop: '20px' }}>
        {PriceList.map((Product, k) => (
          <React.Fragment key={k}>
            <ProductTile
              image={Product?.image}
              name={Product?.name}
              price={Product?.price}
              description={Product?.description} 
            />
          </React.Fragment>
        ))}        
      </div>
    </>
  );
}
