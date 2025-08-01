import { createContext, useContext, useEffect, useState } from "react";
import { WordContext } from "./WordContext";
import { clues as cluesNumbers } from "../data/clues";

export const CluesContext = createContext();

export function CluesContextProvider(props) {
  const { movieData, started } = useContext(WordContext);

  const [cluesData, setCluesData] = useState([]);

  useEffect(() => {
    if (started) {
      setCluesData([...cluesNumbers]);
    }
  }, [started]);

  useEffect(() => {
    if (movieData) {
      console.log(movieData);
    }
  }, [movieData]);

  function handleClickClue(value) {
    switch (value) {
      case 1: 
        break;
      case 2:
        break;
      case 3:
        break;
      case 4:
        break;
      default:
        break;
    }
  }

  return (
    <CluesContext.Provider
      value={{
        movieData,
        cluesData,
        started,
      }}
    >
      {props.children}
    </CluesContext.Provider>
  );
}
