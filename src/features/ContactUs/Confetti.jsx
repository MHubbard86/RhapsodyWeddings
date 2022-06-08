import React from "react";
import { useWindowSize } from "react-use";
import PageHeader, { PageParagraph } from '../../components/Headers/Pageheaders';
import Confetti from "react-confetti";

const ConfettiMessage = () => {
  const { width, height } = useWindowSize();
  return (
    <>
      <PageHeader title="Congratulation on your big day! "/>
      <PageParagraph text="Your message was sent and we'll be in touch shortly to discuss more for your big day" />
      <Confetti
        width={width}
        height={height}
        recycle={false}
        numberOfPieces={500}
      />
    </>
  );
}

export default ConfettiMessage;
