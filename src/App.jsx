import MovieTitle from "./components/MovieTitle";
import Letters from "./components/Letters";
import Result from "./components/Result";
import Errors from "./components/Errors";
import PlayBtn from "./components/PlayBtn";
import { useContext } from "react";
import { WordContext } from "./context/WordContext";
import Clues from "./components/Clues";
import Header from "./components/Header";
import image from "./assets/hero.png";
import LanguageBtn from './components/LanguageBtn'

function App() {
  const { startGame, started, first } = useContext(WordContext);

  if (!started && first) {
    return (
      <>
        <Header />
        <LanguageBtn/>
        <img src={image} className="size-50" />
        <PlayBtn onClick={startGame}>Jugar</PlayBtn>
      </>
    );
  } else {
    return (
      <>
        <Header />
        <MovieTitle />
        <Errors />
        <Clues />
        <Letters />
        <Result />
      </>
    );
  }
}

export default App;
