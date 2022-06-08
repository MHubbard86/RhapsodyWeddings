import React from "react";
import Data from './Data';
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BsPen } from "react-icons/bs";
import InstagramIcon from '../../components/Icons/Instagram';
import PageHeader, { PageParagraph } from '../../components/Headers/Pageheaders';
import EmailIcon from '../../components/Icons/Email';

export default function FAQ() {
  const PageDescription = 'For any additional queries please feel free to reach out to me via email or Instagram'
  return (
    <>
      <section>
        <PageHeader title="Frequently Asked Questions (FAQs)" />
        <PageParagraph text={PageDescription} endIcon={<><EmailIcon /><InstagramIcon /></>} />
        <div style={{display:'flex', flexWrap:'wrap'}}>
          {Data?.map((FAQ, k) => (
            <React.Fragment key={k}>
              <div className="col-md-6 col-lg-4 mb-4">
                <h5 className="mb-3" style={{display:'flex', flexDirection:'row', gap:'10px'}}>
                  <AiOutlineQuestionCircle />
                  {FAQ?.question}
                </h5>
                <p style={{display:'flex', flexDirection:'row', gap:'10px'}}>
                  <BsPen style={{ minWidth: '1rem' }} />
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
