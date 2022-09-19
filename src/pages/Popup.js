import React from "react";

const Popup = props => {
  return (
    <div className="popup-box">
      <div className="box1">
        <button className="close-icon" onClick={props.handleClose}>X</button>
        {props.content}
      </div>
    </div>
  );
};

export default Popup;
