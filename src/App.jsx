import { useEffect, useState } from "react";
import MovieTitle from "./components/MovieTitle";
import Letters from "./components/Letters";
import { letters as letterData } from "./data/letters";
import Result from "./components/Result";
import Errors from "./components/Errors";
import PlayBtn from "./components/PlayBtn";

function App() {
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
      setFinalResult("default")
      setErrors(0)
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

  if (!started && first) {
    return (
      <>
        <h1>Movie hangman</h1>
        <PlayBtn onClick={startGame}>Play</PlayBtn>
      </>
    );
  } else {
    return (
      <>
        <h1>Movie hangman</h1>
        <MovieTitle progress={progress} />
        <Errors errors={errors} />
        <Letters letters={letters} validateLetter={validateLetter} />
        <Result finalResult={finalResult} restartGame={restartGame} />
      </>
    );
  }
}

export default App;
