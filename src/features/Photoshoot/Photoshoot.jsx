import React from "react";
import InstagramIcon from '../../components/Icons/Instagram';
import EmailIcon from '../../components/Icons/Email';
import PhotoAlbum from '../../components/PhotoAlbum/PhotoAlbum';
import photos from './photos';

export default function Photoshoot() {
  return (
    <>
      <section style={{ margin: '10px' }}>
        <h3 className="text-center mb-4 pb-2 fw-bold" style={{ marginTop: '20px'}}>
          Styled Shoots
        </h3>
        <div className="container-fluid">     
          <p className="text-center">
            I love nothing more than to take part in Styled Shoots.  
            If you are a photographer, venue, make-up artist or other supplier then
            I would be more than happy to take part (if available) for hair or décor.<br />
            The price to hire my services is £25 per hour.<br />
            To check availablility please do not hesitate to get in touch.
            &nbsp;<InstagramIcon />&nbsp;<EmailIcon />
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
