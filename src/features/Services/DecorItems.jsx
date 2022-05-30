import React from "react";
import Button from '../../components/Buttons/Button';
import './styles.css';

export default function DecorItems() {
  return (
    <>
      <div className="service-package">
        <div>
          <h3>Individual Décor Items</h3>
          <h6 style={{ marginLeft: '20px'}}>Ceremony backdrop - £150 to £200</h6>
          <h6 style={{ marginLeft: '20px'}}>Candy Cart (fully stocked) - £200</h6>
          <h6 style={{ marginLeft: '20px'}}>Flower Wall (add Neon for £35) - £100</h6>
          <h6 style={{ marginLeft: '20px'}}>LOVE letters</h6>
          <h6 style={{ marginLeft: '20px'}}>Blossom trees canopy - £200</h6>
          <h6 style={{ marginLeft: '20px'}}>Blossom moongate arch - £150</h6>
          <h6 style={{ marginLeft: '20px'}}>1.2 table top blossoms - £10 per tree</h6>
          <h6 style={{ marginLeft: '20px'}}>1.8 table top blossoms - £10 per tree</h6>
          <h6 style={{ marginLeft: '20px'}}>Floral arrangements - £60</h6>          
          <h6>Customised to your wedding colours</h6>
          <Button link="/email" text="Enquire Here" />
        </div>
      </div>
      <div className="service-package">
        <div>
          <h3>Centerpieces</h3>
          <h6 style={{ marginLeft: '20px'}}>Simple floral arrangement - £20 per table</h6>
          <h6 style={{ marginLeft: '30px'}}> - Includes pillar candles or floating candles in jars</h6>
          <h6 style={{ marginLeft: '20px'}}>Tall rectangle stands (gold) - £25 per table</h6>
          <h6 style={{ marginLeft: '20px'}}>Handmade hoop stands - £35 per table</h6>
          <h6 style={{ marginLeft: '20px'}}>Whisky and gin bottles - £10 per table</h6>
          <h6 style={{ marginLeft: '20px'}}>Candelabras - £20 per table</h6>
          <h6 style={{ marginLeft: '30px'}}> - Includes wooden blocks</h6>
          <Button link="/email" text="Enquire Here" />
        </div>
      </div>
    </>
  );
}
