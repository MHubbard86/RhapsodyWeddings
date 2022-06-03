import React from "react";
import InstagramIcon from '../../components/Icons/Instagram';
import PhotoAlbum from '../../components/PhotoAlbum/PhotoAlbum';
import VideoSource from '../../components/Video/VideoSource';
import PageHeader from '../../components/Headers/Pageheaders';
import hairphotos from './hair';
import decorphotos from './decor';
import videos from './videos';
import './styles.css';

export default function Gallery(props) {
  const galleryType = props.location.hash.replace('#','').toLowerCase();
  const description = (galleryType === 'hair') ? 'Hair' : 
                      (galleryType === 'decor') ? 'Décor' : 'Reels';
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
