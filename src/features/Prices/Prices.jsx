import React from "react";
import PriceList from './PriceList/PriceList';
import PhotoGallery from '../../components/PhotoGallery/PhotoGallery';
import HairImages from './HairImages';
import InstagramIcon from '../../components/Icons/Instagram';
import './styles.css';

export default function Prices() {
  return (
    <>
      <h1>Pricing</h1>
      <div className="pricing-wrap">
        <div>
          <h3>Full Bridal Hair Package - £350</h3>
          <div className='leftContent'></div>
          <div>
            With up to 3 bridemaids with complimentary Mother of the Bride.<br />
            Includes trail prior to the day, travel and free use of accessories.<br /><br />
            <h5>Individual Prices</h5>
            Bride - £150<br />
            Bridemaids - £50<br />
            Trail Only - £65<br />
            Mother of the Bridge or Groom - £45<br />
            Under 10s - £35 each<br />
            Extra Guests - £50 per person<br />
            Use of hair extensions/hair pieces individual wefts - £60
          </div>
        </div>
        <div>
          <PhotoGallery photos={HairImages} />
        </div>
      </div>
      <div className="decor-wrap">
        <div>
          <h3>Décor</h3>
          <div className='leftContent'>Customised to your wedding colours,
            for more examples please check us out on Instagram
            &nbsp;
            <InstagramIcon />
          </div>
          <div className="pricing-decor-wrap">
            <div>
              <h5>Full Package - £650</h5>
               - Postbox<br />
               - Candy cart<br />
               - Donut wall<br />
               - Ceremony backdrop or flower wall<br />
               - Welcome sign or table plan mirrors<br />
               - Rose or blossom trees<br />
               - Lanterns<br />
               - Ladder display<br />
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
      <PriceList />
    </>
  );
}
