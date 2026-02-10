import React from 'react';
import clsx from 'clsx';
import Status from './components/Status.jsx'
import Languages from './components/Languages.jsx'
import Word from './components/Word.jsx'
import KeyboardElements from './components/Keyboard.jsx'
import { languages } from "./languages.js"
import { getRandomWord } from './utils.js';
import Confetti from "react-confetti"

export default function App() {


  const [currentWord, setCurrentWord] = React.useState(()=> getRandomWord())
  const wordArr = currentWord.split("")

  const [guessLetter, setGuessLetter] = React.useState([])

  const wrongGuessesCount = 
        guessLetter.filter(letter => !currentWord.includes(letter)).length

  const lastGuessedLetter = guessLetter[guessLetter.length-1]
  const isLastGuessIncorrect = lastGuessedLetter && !currentWord.includes(lastGuessedLetter)

  const farewellLanguage = wrongGuessesCount > 0 ? languages[wrongGuessesCount-1].name: null
  
  const isGameWon = 
        wordArr.every(letter => guessLetter.includes(letter))      
  const isGameLost = wrongGuessesCount >= languages.length - 1 ;
  const isGameOver = isGameWon || isGameLost

  function addLetter(letter) {
    setGuessLetter(prevLetter =>
      prevLetter.includes(letter) ?
        prevLetter :
        [...prevLetter, letter]
    )
  }

  function getKeyClass(letter) {
    const isGuessed = guessLetter.includes(letter)
    const isCorrect = isGuessed && currentWord.includes(letter)
    const isWrong = isGuessed && !currentWord.includes(letter)
    return clsx({
      correct: isCorrect,
      wrong: isWrong
    })
  }

  function resetGame(){
    setCurrentWord(getRandomWord())
    setGuessLetter([])
  }

  return (
    <main>
      {
        isGameWon && 
        <Confetti 
          recycle={false}
          numberOfPieces={1000}
        />
      }
      <header>
        <h1>Assembly: Endgame</h1>
        <p>Guess the word in under 8 attempts to keep the programming
          world safe from Assembly!</p>
      </header>

      <Status 
        gameWon={isGameWon}
        gameLost={isGameLost}
        gameOver={isGameOver}
        farewell={farewellLanguage}
        showFarewell={isLastGuessIncorrect}
      />

      <section className='languages-chips'>
        <Languages 
          wrongGuessesCount={wrongGuessesCount}
        />
      </section>

      <section className='word-box'>
        <Word 
          arr={wordArr} 
          guessLetter={guessLetter}
          gameLost={isGameLost}
        />
      </section>

      <section className='keyboard'>
        <KeyboardElements 
          addLetter={addLetter}
          getKeyClass={getKeyClass}
          gameOver={isGameOver}
        />
      </section>
      {isGameOver && <button onClick={resetGame} className="new-game">New Game</button>}
    </main>
  )
}