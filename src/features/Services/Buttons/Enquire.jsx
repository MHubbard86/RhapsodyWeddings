import React from "react";
import Button from '../../../components/Buttons/Button';

export default function Enquire(props) {
  const { isLight = false } = props;
  return (
    <Button link="/email" text="Enquire Here" isLight={isLight} />
  );
}
