import React from "react";
import { useWindowSize } from "react-use";
import { AiOutlineMail } from "react-icons/ai";
import Confetti from "react-confetti";

const ConfettiMessage = () => {
  const { width, height } = useWindowSize();
  return (
    <>
      <h2>
        Congratulation!  Your message <AiOutlineMail /> was sent and we'll be in touch shortly.
      </h2>
      <Confetti
        width={width}
        height={height}
        recycle={false}
        numberOfPieces={250}
      />
    </>
  );
}

export default ConfettiMessage;