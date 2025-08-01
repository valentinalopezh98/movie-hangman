import { useContext } from "react";
import { WordContext } from "../context/WordContext";

export default function MovieTitle() {
  const { progress } = useContext(WordContext);

  if (progress) {
    return (
      <div>
        {progress.map((char, i) => (
          <span key={i}> {char === " " ? "\u00A0" : char} </span>
        ))}
      </div>
    );
  }
}
