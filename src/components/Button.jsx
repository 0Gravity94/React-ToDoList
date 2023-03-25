import React from "react";

function Button(props) {
  return (
    <div data-cy="button" className={props.className} onClick={props.onClick}>
      {props.label}
    </div>
  );
}

export default Button;
