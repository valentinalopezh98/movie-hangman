import { createContext } from "react";
import { letters as letterData } from "../data/letters";
import { useEffect, useState } from "react";

export const WordContext = createContext();

export function WordContextProvider(props) {
  const [movieData, setMovieData] = useState(null);
  const [progress, setProgress] = useState([]);
  const [movieTitle, setMovieTitle] = useState([]);
  const [letters, setLetters] = useState([]);
  const [finalResult, setFinalResult] = useState("default");
  const [errors, setErrors] = useState(0);
  const [started, setStarted] = useState(false);
  const [first, setFirst] = useState(true);

  useEffect(() => {
    if (movieData) {
      setMovieTitle(movieData.title.toUpperCase().split(""));
    }
  }, [movieData]);

  useEffect(() => {
    if (finalResult === "won" || finalResult === "lost") {
      const updatedLetters = letters.map((l) => ({
        ...l,
        clicked: true,
      }));
      setLetters(updatedLetters);
      setStarted(false);
    }
  }, [finalResult]);

  useEffect(() => {
    const userProgress = [...movieTitle];
    for (let i = 0; i < userProgress.length; i++) {
      if (/^[a-zA-Z0-9]$/.test(userProgress[i])) {
        userProgress[i] = "_";
      }
    }
    setProgress(userProgress);
  }, [movieTitle]);

  useEffect(() => {
    if (progress.length !== 0) setFinalResult(checkWin());
  }, [progress]);

  function checkWin() {
    for (let i = 0; i < movieTitle.length; i++) {
      if (movieTitle[i] !== progress[i]) {
        return "default";
      }
    }
    return "won";
  }

  function validateLetter(value) {
    const updatedLetters = letters.map((letter) =>
      letter.value === value ? { ...letter, clicked: true } : letter
    );

    setLetters(updatedLetters);

    if (movieTitle.includes(value)) {
      const userProgress = [...progress];
      for (let i = 0; i < movieTitle.length; i++) {
        if (movieTitle[i] === value) {
          userProgress[i] = value;
        }
      }
      setProgress(userProgress);
    } else {
      setErrors(errors + 1);
      if (errors + 1 >= 6) {
        setFinalResult("lost");
      }
    }
  }

  useEffect(() => {
    if (started) {
      setLetters([...letterData]);
      fetch("/movies.json")
        .then((res) => res.json())
        .then((movies) =>
          setMovieData(movies[Math.floor(Math.random() * movies.length)])
        );
      setFinalResult("default");
      setErrors(0);
    }
  }, [started]);

  function startGame() {
    setStarted(true);
    setFirst(false);
  }

  function restartGame() {
    setStarted(true);
  }

  if (movieData) {
    console.log(movieData.title);
  }

  return (
    <WordContext.Provider
      value={{
        startGame,
        progress,
        errors,
        letters,
        validateLetter,
        startGame,
        restartGame,
        started,
        finalResult,
        first,
      }}
    >
      {props.children}
    </WordContext.Provider>
  );
}
