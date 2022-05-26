import React from "react";
import InstagramIcon from '../../components/Icons/Instagram';
import hairphotos from './hair';
import decorphotos from './decor';
import PhotoAlbum from '../../components/PhotoAlbum/PhotoAlbum';
import './styles.css';

export default function Gallery(props) {
  const galleryType = props.location.hash.replace('#','').toLowerCase();
  const isHairGallery = galleryType?.includes('hair');
  const description = isHairGallery ? 'Hair' : 'Décor';
  const photos = isHairGallery ? hairphotos : decorphotos;
  return (
    <>
      <section style={{ margin: '10px' }}>
        <h3 className="text-center mb-4 pb-2 fw-bold" style={{ marginTop: '20px'}}>
          Gallery - {description}
        </h3>
        <div className="container-fluid">
          <p className="text-center">
            For more examples please check out our Instagram page (and do not forget to follow us)
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
