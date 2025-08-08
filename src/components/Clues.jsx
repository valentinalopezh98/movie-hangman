import ClueBtn from "./ClueBtn";
import { useContext } from "react";
import { CluesContext } from "../context/CluesContext";
import { CiStar } from "react-icons/ci";

function Clues() {
  const { cluesData, showingClues } = useContext(CluesContext);

  return (
    <div className="bg-neutral-700 rounded-2xl p-2.5 flex flex-col gap-3">
      <h2 className="font-bold inline-flex gap-1 items-center">
        {" "}
        <CiStar />
        Pistas disponibles
      </h2>
      <div className="flex flex-col gap-2.5">
        {cluesData.map((c) => (
          <div>
          <ClueBtn key={c.value} value={c.value} text={c.text} available={c.available} />
          <div></div>
          </div>
        ))}
      </div>

      {showingClues.length !== 0 &&
        showingClues.map((c, i) => (
          <div key={i}>
            {c.includes(".jpg") ? (
              <img src={`https://image.tmdb.org/t/p/w154${c}`} className="blur-sm"/>
            ) : (
              <div>{c}</div>
            )}
          </div>
        ))}
    </div>
  );
}

export default Clues;
