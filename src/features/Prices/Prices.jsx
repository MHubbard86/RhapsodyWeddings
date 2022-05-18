import React from "react";
import ProductTile from '../../components/ProductTile/ProductTile';
import PriceList from './PriceList';
import './styles.css';

export default function Prices() {
  return (
    <>
      <h1>Pricing</h1>
      <div className="pricing-wrap">
        <div>
          <h3>Hair</h3>
          <div className='leftContent'><i>Includes trail prior to the day, travel and free use of accessories</i></div>
          <div className="pricing-hair-wrap">
            <div>
              <strong>Full Bridal Hair Package - £350</strong><br />
              <i>With up to 3 bridemaids with complimentary Mother of the Bride</i><br /><br />
              <u><strong>Individual Prices</strong></u><br />
              Bride - £150<br />
              Bridemaids - £50<br />
              Trail Only - £65<br />
              Mother of the Bridge or Groom - £45<br />
              Under 10s - £35 each<br />
              Extra Guests - £50 per person<br />
              Use of hair extensions/hair pieces individual wefts - £60
            </div>
          </div>
        </div>
        <div>
          <h3>Décor</h3>
          <div className='leftContent'><i>Customised to your wedding colours</i></div>
          <div className="pricing-decor-wrap">
            <div>
              <strong>Full Package - £650</strong><br />
              <i>Postbox</i><br />
              <i>Candy cart</i><br />
              <i>Donut wall</i><br />
              <i>Ceremony backdrop or flower wall</i><br />
              <i>Welcome sign or table plan mirrors</i><br />
              <i>Rose or blossom trees</i><br />
              <i>Lanterns</i><br />
              <i>Ladder display</i><br />
            </div>
            <div>
              <u><strong>Individual Prices</strong></u><br />
              Ceremony backdrop - £150 - £200<br />
              Candy Cart (fully stocked) - £200<br />
              Flower Wall (add Neon for £35) - £100<br />
              Neon sign - £65<br />
              LOVE letters - £95<br />
              Blossom trees canopy - £200<br />
              Blossom moongate arch - £150<br />
              1.2 table top blossoms - £10 per tree<br />
              1.8 table top blossoms - £10 per tree<br />
              Floral arrangements - £60<br />
            </div>
            <div>
              <u><strong>Bundles</strong></u><br />
              Rustic Bundle - £100<br />
              <i>Clock order of the day, Wood pallet, Rustic crate display</i><br />
              Welcome sign and table plan mirror - £75 (plain) or £120 (customised)<br />
              <i>Including one wooden easel</i><br />
              Tree, lantern and post box - £100<br />
              <i>Includes 2 rose trees, 6 lanterns and post box</i><br />
            </div>
            <div>
              <u><strong>Centerpieces</strong></u><br />
              Simple floral arrangement - £20 per table<br />
              <i>Includes pillar candles or floating candles in jars</i><br />
              Tall rectangle stands (gold) - £25 per table<br />
              Handmade hoop stands - £35 per table<br />
              Whisky and gin bottles - £10 per table<br />
              Candelabras - £20 per table<br />
              <i>Includes wooden blocks</i><br />
            </div>
          </div>
        </div>
      </div>
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
