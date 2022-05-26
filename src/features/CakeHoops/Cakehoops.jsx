import React from "react";
import InstagramIcon from '../../components/Icons/Instagram';
import PhotoAlbum from '../../components/PhotoAlbum/PhotoAlbum';
import photos from './photos';

export default function Cakehoops() {
  return (
    <>
      <section style={{ margin: '10px' }}>
        <h3 className="text-center mb-4 pb-2 fw-bold" style={{ marginTop: '20px'}}>
          Cake Hoops
        </h3>
        <div className="container-fluid">
          <p className="text-center">
            Our prices start from £65 for our bespoke Cake Hoops made to your individual request
            &nbsp;
            <InstagramIcon />
          </p>
          <div className="d-flex flex-wrap justify-content-center">
            <PhotoAlbum
              layout="masonry"
              photos={photos}
            />
          </div>
        </div>
      </section>
    </>
  );
}
