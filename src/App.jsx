import { useEffect, useState } from "react";
import MovieTitle from "./components/MovieTitle";
import Chars from "./components/Chars";
import {letters as letterData} from "./data/letters"

function App() {
  const [movieData, setMovieData] = useState(null);
  const [progress, setProgress] = useState([]);
  const [letters, setLetters] = useState([])

  useEffect(() => {
    setLetters([...letterData])
    fetch("/movies.json")
      .then((res) => res.json())
      .then((movies) =>
        setMovieData(movies[Math.floor(Math.random() * movies.length)])
      );
  }, []);

  useEffect(() => {
    if (movieData) {
      const progressArray = movieData.title.split("");
      setProgress(progressArray)
    }
  }, [movieData]);

if(movieData)
  console.log(movieData.title)
  return (
    <>
      <h1>Movie hangman</h1>
      <MovieTitle progress={progress}/>
      <Chars letters={letters}/>
    </>
  );
}

export default App;
