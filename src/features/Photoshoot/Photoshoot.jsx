import React from "react";
import Enquire from '../Buttons/Enquire';
import PhotoAlbum from '../../components/PhotoAlbum/PhotoAlbum';
import PageHeader, { PageParagraph } from '../../components/Headers/Pageheaders';
import photos from './photos';

export default function Photoshoot() {
  const PageDescription = `If you are a photographer, venue, make-up artist or other supplier then I would be more than happy to take part (if available) for hair or décor.
    The price to hire my services is £25 per hour.
    To check availablility please do not hesitate to get in touch.
  `
  return (
    <>
      <section>
        <PageHeader title="Styled Shoots" />
        <PageParagraph text={PageDescription} endIcon={<Enquire isFilled={true} />} />
        <div className="container-fluid">     
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
