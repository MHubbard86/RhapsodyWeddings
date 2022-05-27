import React from "react";
import ProductTile from '../../../components/ProductTile/ProductTile';
import DecorImages from './DecorImages';

export default function ServicesList() {
  return (
    <>
      <div className="product-list-grid-wrap" style={{ width: '100%', marginTop: '20px' }}>
        {DecorImages.map((Product, k) => (
          <React.Fragment key={k}>
            <ProductTile
              src={Product?.image}
              name={Product?.name}
              price={Product?.price}
              description={Product?.description} 
              height={Product?.height} 
              width={Product?.width} 
            />
          </React.Fragment>
        ))}        
      </div>
    </>
  );
}
