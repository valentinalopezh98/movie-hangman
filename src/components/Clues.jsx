import ClueBtn from "./ClueBtn";
import { useContext } from "react";
import { CluesContext } from "../context/CluesContext";
function Clues() {
  const { cluesData, showingClues } = useContext(CluesContext);
  
  return (
    <div>
      <h2>Pistas</h2>
      {cluesData.map((c) => (
        <ClueBtn key={c.value} value={c.value} available={c.available} />
      ))}
      {showingClues.length !== 0 &&
        showingClues.map((c, i) => (
          <div key={i}>
            {(c.includes(".jpg")) ? (
              <img src={`https://image.tmdb.org/t/p/w154${c}`}/>
            ) : (
              <div>{c}</div>
            )}
          </div>
        ))}
    </div>
  );
}

export default Clues;
