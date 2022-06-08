import React from "react";
import Data from './Data';
import PageHeader from '../../components/Headers/Pageheaders';
import { ImQuotesLeft } from 'react-icons/im';
import './styles.css';

export default function Reviews() {
  return (
    <>
      <section>
        <PageHeader title="Reviews" />
        <div className="text-center" style={{display:'flex', flexWrap:'wrap'}}>
          {Data?.map((review, k) => (
            <React.Fragment key={k}>
              <div className="col-md-4 mb-4">
                <div className="card card-layout">
                  <div className="card-body py-4 mt-2">
                    <div className="d-flex justify-content-center mb-4">
                      <img src={review.image} alt=""
                        className="rounded-circle shadow-1-strong" width="auto" height="100" />
                    </div>
                    <h5 className="font-weight-bold">{review.name}</h5>
                    <h6 className="font-weight-bold my-3">{review.location}</h6> 
                    <div style={{ display:'flex', flexDirection:'row', gap:'10px' }}>
                      <ImQuotesLeft style={{ fontSize: '2rem', minWidth: '1rem' }} />                   
                      <p className="mb-2">
                        {review.quote}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>      
    </>
  );
}
