import { useContext } from "react";
import { WordContext } from "../context/WordContext";

export default function Errors() {

  const {errors} = useContext(WordContext)
  return (
    <div>{errors}</div>
  )
}
