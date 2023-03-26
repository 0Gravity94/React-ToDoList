import React from "react";

function Button(props) {
  return (
    <div className={props.className} onClick={props.onClick}>
      {props.label}
    </div>
  );
}

export default Button;
