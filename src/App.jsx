import MovieTitle from "./components/MovieTitle";
import Letters from "./components/Letters";
import Result from "./components/Result";
import Errors from "./components/Errors";
import PlayBtn from "./components/PlayBtn";
import { useContext } from "react";
import { WordContext } from "./context/WordContext";
import Clues from './components/Clues'

function App() {
  const { startGame, started, first } = useContext(WordContext);


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
        <MovieTitle />
        <Errors />
        <Letters />
        <Result />
        <Clues/>
      </>
    );
  }
}

export default App;
