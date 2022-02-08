import "./App.css";
import React from "react";
import Ahorcado from "./ahorcado";
import Word from "./word";
import Keyboard from "./keyboard";
import Popup from "./popup";
function App() {
  const [errors, setErrors] = React.useState(0);
  const [word, setWord] = React.useState("");
  const [letters, setLetters] = React.useState([" "]);
  const [lose, setLose] = React.useState(false);
  const [win, setWin] = React.useState(false);
  const [start, setStart] = React.useState(true);
  const [wordArray,setWordArray] = React.useState([" "])

  const letterPress = (letter) => {
    if (!letters.includes(letter)) {
      setLetters([...letters, letter]);
      if (!word.includes(letter)) {
        setErrors(errors + 1);
        if (errors === 6) {
          setLose(true);
        }
      } else {
        let goodSelections = 0
        const wordLenght =wordArray.length
        wordArray.forEach(letterWord => {
          if ([...letters,letter].includes(letterWord)) {
            
            goodSelections++

          }
        })
        if (goodSelections===wordLenght) {
          setWin(true)
        }
      }
    }
  }
  const reset = () => {
    setLose(false);
    setWin(false);
    setLetters([]);
    setErrors(0);
    setStart(true);
    setWord('')
    setWordArray([''])
  };
  const startgame = () => {
    if (word) {
      setStart(false);
    }
  };
  const OnChangeWord = (word) => {
    const regex = new RegExp(/^[a-zA-Z\s]*$/);
    if (regex.test(word)) {
      setWord(word);
      setWordArray(Array.from(word));
    }
  };
  return (
    <div className="App">
      <Ahorcado errors={errors} />
      <Word word={word} letters={letters} />
      <Keyboard letter={letterPress} wordArray={wordArray} tries={letters}/>
      {(win || lose) && (
        <Popup>
          <div className="popupRestart">
            <h1 className="popupTitle">
              {lose && "Perdiste"}
              {win && "Ganaste"}
            </h1>
            <button onClick={() => reset()}>Reiniciar</button>
          </div>
        </Popup>
      )}
      {start && (
        <Popup>
          <div className="popupRestart">
            <h1 className="popupTitle">
              Elige una palabra o frase para empezar
            </h1>
            <input
              type="text"
              pattern={"[a-zA-Z]"}
              maxLength="25"
              value={word}
              onChange={(e) => OnChangeWord(e.target.value.toUpperCase())}
            ></input>
            <button onClick={() => startgame()}>Empezar</button>
          </div>
        </Popup>
      )}
    </div>
  );
}

export default App;
