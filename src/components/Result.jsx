import { useContext } from "react";
import { WordContext } from "../context/WordContext";
import PlayBtn from "./PlayBtn";

export default function Result() {
  const { finalResult, restartGame } = useContext(WordContext);
  
  if (finalResult === "won") {
    return (
      <div>
        <span>Ganaste!</span>
        <PlayBtn onClick={restartGame}>Play again</PlayBtn>
      </div>
    );
  } else if (finalResult === "lost") {
    return (
      <div>
        <span>Perdiste</span>
        <PlayBtn onClick={restartGame}>Play again</PlayBtn>
      </div>
    );
  }
}
