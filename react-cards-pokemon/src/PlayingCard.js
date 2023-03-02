import React from "react";
import backOfCard from "./back.png";
import "./PlayingCard.css"
import useFlip from "./hooks/useFlip"

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  
  const [isFlipped, flipCard] = useFlip(true);
  
  return (
    <img
      src={isFlipped ? front : back}
      alt="playing card"
      onClick={flipCard}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
