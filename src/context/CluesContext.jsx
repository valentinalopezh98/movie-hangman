import { createContext, useContext, useEffect, useState } from "react";
import { WordContext } from "./WordContext";
import { clues as cluesNumbers } from "../data/clues";

export const CluesContext = createContext();

export function CluesContextProvider(props) {
  const { movieData, started } = useContext(WordContext);

  const [cluesData, setCluesData] = useState([]); //Los numeros de pistas y sus caractteristicas (clicked? available?)
  const [clues, setClues] = useState([]); // Todas las pistas en un solo arreglo
  const [showingClues, setShowingClues] = useState([]); //Solo las pistas que me pidio mostrar el jugador

  useEffect(() => {
    if (started) {
      setCluesData([...cluesNumbers]);
    }
  }, [started]);

  useEffect(() => {
    if (movieData) {
      console.log(movieData);
      const cluesArray = [
        movieData.release_date.slice(0, 4),
        movieData.poster_path,
        movieData.overview,
        movieData.backdrop_path,
      ];
      setClues(cluesArray);
      setShowingClues([])
    }
  }, [movieData]);

  function handleClickClue(value) {
    setShowingClues([...showingClues, clues[value - 1]]);
    const updatedCluesData = cluesData.map((c) =>
      c.value === value
        ? { ...c, available: false }
        : c.value === value + 1
        ? { ...c, available: true }
        : c
    );
    setCluesData(updatedCluesData);
  }

  console.log(showingClues);
  return (
    <CluesContext.Provider
      value={{
        movieData,
        cluesData,
        started,
        handleClickClue,
        showingClues,
      }}
    >
      {props.children}
    </CluesContext.Provider>
  );
}
