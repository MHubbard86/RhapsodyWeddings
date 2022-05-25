import React from "react";
import InstagramIcon from '../../components/Icons/Instagram';
import './styles.css';

export default function Gallery() {
  return (
    <>
      <section style={{ margin: '10px' }}>
        <h3 className="text-center mb-4 pb-2 fw-bold" style={{ marginTop: '20px'}}>
        Gallery
        </h3>
        <div className="container-fluid">
          <p className="text-center">
            For more examples please check out our Instagram page (and don't forget to Follow us)
            &nbsp;
            <InstagramIcon />
          </p>
          <div className="d-flex flex-wrap justify-content-center">
            <div className="d-flex flex-column">
              <img className="img-fluid" src="../images/gallery/1.jpg" alt="" />
              <img className="img-fluid" src="../images/gallery/2.jpg" alt="" />
            </div>
            <div className="d-flex flex-column">
              <img className="img-fluid" src="../images/gallery/3.jpg" alt="" />
              <img className="img-fluid" src="../images/gallery/4.jpg" alt="" />
            </div>
            <div className="d-flex flex-column">
              <img className="img-fluid" src="../images/gallery/5.jpg" alt="" />
              <img className="img-fluid" src="../images/gallery/6.jpg" alt="" />
            </div>
            <div className="d-flex flex-column">
              <img className="img-fluid" src="../images/gallery/7.jpg" alt="" />
              <img className="img-fluid" src="../images/gallery/8.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
