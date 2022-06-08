import React from 'react';
import Button from '../../components/Buttons/Button';
import PageHeader, { PageParagraph } from '../../components/Headers/Pageheaders';
import HomeImages from './HomeImages/HomeImages';

export default function Header() {
  const Main_title = `Thank you for visiting us and congratulations on your engagement.

    I'm Amy. 

    I've been in the hair industry for over 20 years now having worked alongside some of the most influential stylists in London and at various shows.  I've always had a flare and passion for wedding hair I just love to style brides (and squad) for their special days.`

  const Main_body = `Our venue décor was established in 2019 when I was planning my own wedding I had other brides approach me to hire some of our décor items, with that we expanded further and now have many couples enquiring our wedding décor.

    I always have my couples in mind and will always stay budget friendly, whether it's a big budget or small there's something for everyone.

    My aim is to give you the day of your dreams completely stress free.`
  return (
    <>
      <section>
        <PageHeader title="Rhapsody Hair and Events"/>
        <div className="align-items-center" style={{ marginTop: '1rem' }}>
          <div className="float-left home-image">
            <HomeImages />
          </div>
          <PageParagraph text={Main_title} />
          <div className="text-center heading-paragraph">
            Based in Colchester, Essex we cover the Essex and Suffolk areas and we are currently a recommended supplier at the beautiful idyllic <a href='https://prested.co.uk/suppliers/' target="_blank" rel="noopener noreferrer"> Prested Hall</a>.
          </div>
          <PageParagraph text={Main_body} />
          <Button link="/email" text="Enquire Here" isFilled={true} />
        </div>
      </section>
    </>
  );
}