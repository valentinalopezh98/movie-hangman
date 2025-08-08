import { useContext } from "react";
import { CluesContext } from "../context/CluesContext";
import { GoLightBulb } from "react-icons/go";
export default function ClueBtn({ value, available, text}) {
  const { handleClickClue } = useContext(CluesContext);
  return (
    <button disabled={!available} onClick={() => handleClickClue(value)} className="bg-neutral-600 py-1 px-4 rounded-xl flex gap-1.5 items-center w-52 hover:bg-neutral-500 disabled:text-neutral-500">
      <GoLightBulb />{text}
    </button>
  );
}
