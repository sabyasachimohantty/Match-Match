import { useEffect, useState } from "react";
import Board from "./components/Board"
import Popup from "./components/Popup";

function App() {

  function shuffleArray(array : String[]) {
    let currentIndex = array.length;
    let randomIndex; 

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }


  const audio = new Audio('select-sound-121244.mp3')
  const cards = ["blue", "blue", "green", "green", "red", "red", "teal", "teal", "purple", "purple", "lime", "lime", "pink", "pink", "yellow", "yellow"]
  const [shuffledCards, setShuffledCards] = useState(shuffleArray(cards))
  const [moves, setMoves] = useState<number>(0)
  const [isOver, setIsOver] = useState(false)

  useEffect(() => {
    setShuffledCards(shuffleArray(cards))
  }, [])

  const handleClick = () => {
    audio.play()
    setShuffledCards(shuffleArray(cards))
    setMoves(0)
  }
  
  return (
    <>
      <div className={`w-screen h-screen bg-black flex flex-col justify-center items-center gap-4 ${isOver ? "opacity-80" : ""}`}>
        <div className="text-white ">
          Moves : {moves}
        </div>
        <Board shuffledCards={shuffledCards} setMoves={setMoves} moves={moves} setIsOver={setIsOver}/>
        <button type="button" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-slate-900 dark:focus:ring-gray-800"
        onClick={handleClick}>
          New Game
        </button>
      </div>
      {isOver && <Popup setIsOver={setIsOver} handleClick={handleClick}/>}
    </>

  )
}

export default App
