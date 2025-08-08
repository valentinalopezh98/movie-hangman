import Letter from "./Letter";
import { useContext } from "react";
import { WordContext } from "../context/WordContext";

export default function Letters() {
  const { letters, validateLetter } = useContext(WordContext);

  if (letters) {
    return (
      <div className="flex flex-wrap gap-1.5 px-2 justify-center">
        {letters.map((l) => (
          <Letter
            key={l.value}
            value={l.value}
            validateLetter={validateLetter}
            clicked={l.clicked}
          />
        ))}
      </div>
    );
  }
}
