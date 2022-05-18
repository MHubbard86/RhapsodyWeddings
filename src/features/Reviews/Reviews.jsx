import React from "react";
import PhotoGallery from '../../components/PhotoGallery/PhotoGallery';
import CharleeBenge from './CharleeBenge/CharleeBenge';
import { AiFillStar } from 'react-icons/ai';
import './styles.css';

export default function Reviews() {

  const Header = (name, location, link) => {
    return(
      <div>
        <div style={{ fontWeight: 'bold', fontSize: '18px'}}>
          {name}
        </div>
        <div style={{ fontStyle: 'Italic', fontSize: '14px'}}>{location}</div>
        {link &&
          <div style={{ fontStyle: 'Italic'}}>
            <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
          </div>
        }
      </div>
    )
  }

  const ReviewImages = (Images) => {
    if (!Images) return;
    return (
      <div style={{ width: '100%', paddingLeft: '20px', paddingRight: '20px' }}>
        <PhotoGallery photos={Images} />
      </div>
    )
  }

  return (
    <>
      <h1>Reviews</h1>
      <div style={{ width: '100%' }}>
        <div className="reviews-wrap">
          { 
            Header("Charlee Benge", "Gosfield Hall Dec '21", "https://www.gosfield-hall.co.uk/")
          }
          <div>
            "I can not thank you enough for how beautiful you made my venue look, as well as my bridesmaids.  
            You were amazing right from the start, a friendly face to an absolutely oblivious bride-to-be and I don't know what I would have done without you. 
            You went above and beyond to help me throughout the process and not once did I doubt putting my full trust in you.
            Nothing was too much of an ask and I will be forever grateful for the love and commitment you put into my special day.
            Your passion for your job shone through and I couldn't have picked anyone better for the role. Thank you again Amy, you were incredible <AiFillStar />"
          </div>
        </div>
        { 
          ReviewImages(CharleeBenge)
        }
        <div className="reviews-wrap">
          { 
            Header("Elise Went", "")
          }
          <div>
            "Amy is just the perfect person in so many ways she's friendly and professional and will always listen to what you want ! 
            haven't even had my wedding yet but she's been there for me every step of the way and I just know my wedding day will be perfect and it will be all down to her ! 
            Can't recommend Amy enough and I would never go anywhere else Xx"
          </div>
        </div>
        { 
          ReviewImages()
        }
        <div className="reviews-wrap">
          { 
            Header("Jasmine McKay", "")
          }
          <div>
            "Amy provided our venue decor for our wedding and did such an amazing job! 
            The attention to detail was incredible and we got so many compliments on our 
            ceremony room and table decorations. Amy invited us for a consultation in her 
            studio where we saw some beautiful decor and she understood what we wanted from 
            the start! Would recommend Amy to everyone who wants a stress free venue dresser 
            with an eye for detail. Thank you so much for making our wedding beautiful! x"
          </div>
        </div>
        { 
          ReviewImages()
        }
        <div className="reviews-wrap">
          { 
            Header("Kayleigh Brooks-Harper", "")
          }
          <div>
            "We would fully recommend Amy for your wedding hair and venue styling needs. 
            Her eye for detail is amazing, stylish and nothing is too much. She is kind, 
            knowledgable and an up and coming expert in the field of weddings. She made our 
            venue look incredible and everything I hoped and dreamt it would look. Her 
            communication is on point, and is very polite and professional. For our hair, 
            she was thorough and quick managing not only my hair, but 6 bridesmaids and 
            my mum with no hassle, drama or complications. She honestly rocked at 
            helping make our wedding perfect and is absolutely a wedding fairy godmother!"
          </div>
        </div>
        { 
          ReviewImages()
        }
      </div>
    </>
  );
}
