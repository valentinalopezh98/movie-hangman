import { useContext } from "react";
import { CluesContext } from "../context/CluesContext";
export default function ClueBtn({ value, available }) {
  const { handleClickClue } = useContext(CluesContext);
  return (
    <button disabled={!available} onClick={() => handleClickClue(value)}>
      {value}
    </button>
  );
}
