import React from "react";

export const WriteItem = (props) => {
  const { description = '' } = props;
  return <h6 className="item">{description}</h6>
}

export const WriteHeaderItem = (props) => {
  const { description = '' } = props;
  return <h6>{description}</h6>
}

export const WritePrice = (props) => {
  const { price = '' } = props;
  return <h4>{price}</h4>
}

export const WriteHeader = (props) => {
  const { header = '' } = props;
  return <h3>{header}</h3>
}

export const WriteItemIdent = (props) => {
  const { description = '' } = props;
  return <h6 style={{ marginLeft: '30px'}}>{description}</h6>
}