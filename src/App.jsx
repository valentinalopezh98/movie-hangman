import { useEffect, useState } from "react";
import MovieTitle from "./components/MovieTitle";
import Letters from "./components/Letters";
import { letters as letterData } from "./data/letters";

function App() {
  const [movieData, setMovieData] = useState(null);
  const [progress, setProgress] = useState([]);
  const [movieTitle, setMovieTitle] = useState([]);
  const [letters, setLetters] = useState([]);
  const [win, setWin] = useState(false)

  useEffect(() => {
    setLetters([...letterData]);
    fetch("/movies.json")
      .then((res) => res.json())
      .then((movies) =>
        setMovieData(movies[Math.floor(Math.random() * movies.length)])
      );
  }, []);

  useEffect(() => {
    if (movieData) {
      setMovieTitle(movieData.title.toUpperCase().split(""));
    }
  }, [movieData]);

  useEffect(() => {
    const userProgress = [...movieTitle];
    for (let i = 0; i < userProgress.length; i++) {
      if (/^[a-zA-Z0-9]$/.test(userProgress[i])) {
        userProgress[i] = "_";
      }
    }
    setProgress(userProgress);
  }, [movieTitle]);

  useEffect(()=>{
    setWin(checkWin())
  },[progress])

  function checkWin(){
    for (let i = 0; i < movieTitle.length; i++) {
      if (movieTitle[i] === progress[i]){
        return false;
      }     
    }
    return true
  }

  function validateLetter(value) {
    if (movieTitle.includes(value)){
      console.log(true)
      const userProgress = [...progress]
      for (let i = 0; i < movieTitle.length; i++) {
        if (movieTitle[i] === value) {
          userProgress[i] = value
        }
      }
      setProgress(userProgress)
    }
  }

  if (movieData) {
    console.log(movieData.title);
    console.log(progress);
  }

  return (
    <>
      <h1>Movie hangman</h1>
      <MovieTitle progress={progress} />
      <Letters letters={letters} validateLetter={validateLetter} />
    </>
  );
}

export default App;
