import Letter from "./Letter";
import { useContext } from "react";
import { WordContext } from "../context/WordContext";

export default function Letters() {
  const { letters, validateLetter } = useContext(WordContext);

  if (letters) {
    return (
      <div>
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
