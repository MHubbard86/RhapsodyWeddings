import React from "react";

export const Checkbox = (props) => {
  return (
    <>
      <label htmlFor={props.name} className="form-check-label">{props.label}</label>
      <input type="checkbox" value={props.value} name={props.name}
        className={'form-control' + (props.errors && props.touched ? ' is-invalid' : '')}
      />
    </>
  );
};

export default Checkbox;