import React from "react";
import InstagramIcon from '../../components/Icons/Instagram';
import PhotoAlbum from '../../components/PhotoAlbum/PhotoAlbum';
import VideoSource from '../../components/Video/VideoSource';
import PageHeader, { PageParagraph } from '../../components/Headers/Pageheaders';
import hairphotos from './hair';
import decorphotos from './decor';
import videos from './videos';
import './styles.css';

export default function Gallery(props) {
  const galleryType = props.location.hash.replace('#','').toLowerCase();
  const description = (galleryType === 'hair') ? 'Hair' : (galleryType === 'decor') ? 'Décor' : 'Reels';
  const PageDescription = 'For more please check us out on Instagram page (and please follow us)';
  return (
    <>
      <section>
        <PageHeader title={`Gallery - ${description}`} />
        <PageParagraph text={PageDescription} endIcon={<InstagramIcon />} />        
        <div className="container-fluid">
            {((galleryType === 'hair') || (galleryType === 'decor')) &&
              <div className="d-flex flex-wrap justify-content-center">
                <PhotoAlbum
                  layout="masonry"
                  photos={galleryType === 'hair' ? hairphotos : decorphotos }
                />
              </div>
            }
            {(galleryType === 'reels') &&
              <div className="d-flex flex-wrap justify-content-center video-source">
                {videos.map((video, index) => (
                  <VideoSource
                    src={video.src}
                    autoPlay={false}
                    loop="loop"
                    controls="1"
                    key={index}
                  />
                ))}
              </div>         
            }
        </div>
      </section>
    </>
  );
}
