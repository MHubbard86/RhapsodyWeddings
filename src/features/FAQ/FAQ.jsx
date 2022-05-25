import React from "react";
import Data from './Data';
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BsPen } from "react-icons/bs";
import InstagramIcon from '../../components/Icons/Instagram';
import EmailIcon from '../../components/Icons/Email';

export default function FAQ() {
  return (
    <>
      <section style={{ margin: '10px' }}>
        <h3 className="text-center mb-4 pb-2 fw-bold" style={{ marginTop: '20px'}}>
          Frequently Asked Questions (FAQs)
        </h3>
        <p className="text-center mb-5">
          Find the answers for the most frequently asked questions below, 
          but if your question does not appear please feel free to reach out to me by Email or Instagram
          &nbsp;
          <EmailIcon />
          <InstagramIcon />
        </p>
        <div style={{display:'flex', flexWrap:'wrap'}}>
          {Data?.map((FAQ, k) => (
            <React.Fragment key={k}>
              <div className="col-md-6 col-lg-4 mb-4">
                <h5 className="mb-3" style={{display:'flex', flexDirection:'row', gap:'10px'}}>
                  <AiOutlineQuestionCircle />
                  {FAQ?.question}
                </h5>
                <p style={{display:'flex', flexDirection:'row', gap:'10px'}}>
                  <BsPen />
                  {FAQ?.answer}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>
    </>
  );
}
