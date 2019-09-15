import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} onClick={() => props.handleClick(props.id)} />
      </div>
      <div className="content">
        <h2><strong></strong> {props.name}</h2>
      </div>
    </div>
  );
}

export default FriendCard;
