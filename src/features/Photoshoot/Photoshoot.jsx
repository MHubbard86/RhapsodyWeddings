import React from "react";
import InstagramIcon from '../../components/Icons/Instagram';
import EmailIcon from '../../components/Icons/Email';
import PhotoAlbum from '../../components/PhotoAlbum/PhotoAlbum';
import PageHeader from '../../components/Headers/Pageheaders';
import photos from './photos';

export default function Photoshoot() {
  return (
    <>
      <section style={{ backgroundColor: '#f3f2f2' }}>
        <PageHeader title="Styled Shoots" />
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
