import React from "react";
import InstagramIcon from '../../components/Icons/Instagram';
import PhotoAlbum from '../../components/PhotoAlbum/PhotoAlbum';
import PageHeader from '../../components/Headers/Pageheaders';
import photos from './photos';

export default function Cakehoops() {
  return (
    <>
      <section style={{ backgroundColor: '#f3f2f2' }}>
        <PageHeader title="Cake Hoops" />
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
