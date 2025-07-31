import React from "react";
import PlayBtn from "./PlayBtn";

export default function Result({ finalResult, restartGame }) {
  if (finalResult === "won") {
    return (
    <div>
      <span>Ganaste!</span>
         <PlayBtn onClick={restartGame}>Play again</PlayBtn>
      </div>)
  } else if (finalResult === "lost") {
     return (<div>
      <span>Perdiste</span>
      <PlayBtn onClick={restartGame}>Play again</PlayBtn>
      </div>)
  }
}
