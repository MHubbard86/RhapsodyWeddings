import React from "react";
import InstagramIcon from '../../components/Icons/Instagram';
import hairphotos from './hair';
import decorphotos from './decor';
import PhotoAlbum from '../../components/PhotoAlbum/PhotoAlbum';
import PageHeader from '../../components/Headers/Pageheaders';
import './styles.css';

export default function Gallery(props) {
  const galleryType = props.location.hash.replace('#','').toLowerCase();
  const isHairGallery = galleryType?.includes('hair');
  const description = isHairGallery ? 'Hair' : 'Décor';
  const photos = isHairGallery ? hairphotos : decorphotos;
  return (
    <>
      <section style={{ backgroundColor: '#f3f2f2' }}>
        <PageHeader title={`Gallery - ${description}`} />
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
