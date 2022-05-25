import React from "react";

export default function Photoshoot() {
  return (
    <>
      <section style={{ margin: '10px' }}>
        <h3 className="text-center mb-4 pb-2 fw-bold" style={{ marginTop: '20px'}}>
          Styled Shoots
        </h3>
        <div className="container-fluid">          
          <div className="d-flex flex-wrap justify-content-center">
            <div className="d-flex flex-column">
              <img className="img-fluid" src="../images/photoshoot/1.jpg" alt="" />
              <img className="img-fluid" src="../images/photoshoot/2.jpg" alt="" />
            </div>
            <div className="d-flex flex-column">
              <img className="img-fluid" src="../images/photoshoot/3.jpg" alt="" />
              <img className="img-fluid" src="../images/photoshoot/4.jpg" alt="" />
            </div>
            <div className="d-flex flex-column">
              <img className="img-fluid" src="../images/photoshoot/5.jpg" alt="" />
              <img className="img-fluid" src="../images/photoshoot/6.jpg" alt="" />
            </div>
            <div className="d-flex flex-column">
              <img className="img-fluid" src="../images/photoshoot/7.jpg" alt="" />
              <img className="img-fluid" src="../images/photoshoot/8.jpg" alt="" />
            </div>
            <div className="d-flex flex-column">
              <img className="img-fluid" src="../images/photoshoot/9.jpg" alt="" />
              <img className="img-fluid" src="../images/photoshoot/10.jpg" alt="" />
            </div>
            <div className="d-flex flex-column">
              <img className="img-fluid" src="../images/photoshoot/11.jpg" alt="" />
              <img className="img-fluid" src="../images/photoshoot/12.jpg" alt="" />
            </div>
            <div className="d-flex flex-column">
              <img className="img-fluid" src="../images/photoshoot/13.jpg" alt="" />
              <img className="img-fluid" src="../images/photoshoot/14.jpg" alt="" />
            </div>
            <div className="d-flex flex-column">
              <img className="img-fluid" src="../images/photoshoot/15.jpg" alt="" />
              <img className="img-fluid" src="../images/photoshoot/16.jpg" alt="" />
            </div>            
          </div>
        </div>
      </section>
    </>
  );
}
