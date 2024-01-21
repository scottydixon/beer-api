import React, { useState } from "react";

function Beer(props) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <li key="" className="beer">
      <h4 className="beer-title">{props.name}</h4>
      <img className="beer-image" src={props.image} />
      <button onClick={() => setIsLiked(!isLiked)}>
        {isLiked === true ? "I like it" : "I hate it"}
      </button>
    </li>
  );
}

export default Beer;
