import React from "react";
import Enquire from '../Buttons/Enquire';
import PhotoAlbum from '../../components/PhotoAlbum/PhotoAlbum';
import PageHeader, { PageParagraph } from '../../components/Headers/Pageheaders';
import photos from './photos';

export default function Cakehoops() {
  const PageDescription = 'Our prices start from £65 for our bespoke Cake Hoops made to your individual request.'
  return (
    <>
      <section>
        <PageHeader title="Cake Hoops" />
        <PageParagraph text={PageDescription} />
        <div className="text-center heading-paragraph">
          <Enquire isFilled={true} />
        </div>
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
