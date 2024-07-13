import { Dispatch, SetStateAction, useEffect, useState } from "react";

const Board = ({shuffledCards, setMoves, moves, setIsOver}: {
  shuffledCards: String[], 
  setMoves: Dispatch<SetStateAction<number>>,
  moves: number,
  setIsOver: Dispatch<SetStateAction<boolean>>
}) => {
    
    const audio = new Audio('pen-click-99025.mp3')
    const [selectedCard1, setSelectedCard1] = useState<number>(-1)
    const [selectedCard2, setSelectedCard2] = useState<number>(-1)
    const [isClicked, setIsClicked] = useState<boolean[]>(new Array(16).fill(false))

    useEffect(() => {
      setIsClicked(() => {
        return new Array(16).fill(false)
      })
    }, [shuffledCards])
    
    const handleClick = (i : number) => {
        setMoves(moves + 1)
        if (selectedCard1 === -1) {
            setSelectedCard1(i)
            setIsClicked((prevIsClicked) => {
                const updatedIsClicked = [...prevIsClicked];
                updatedIsClicked[i] = true;
                return updatedIsClicked;
              });
        } else if (selectedCard2 === -1) {
            setSelectedCard2(i)
            setIsClicked((prevIsClicked) => {
                const updatedIsClicked = [...prevIsClicked];
                updatedIsClicked[i] = true;
                return updatedIsClicked;
            });           
        } else {
            if (shuffledCards[selectedCard1] !== shuffledCards[selectedCard2]) {
                setIsClicked(() => {
                  isClicked[selectedCard1] = false
                  isClicked[selectedCard2] = false
                  isClicked[i] = true
                  return isClicked
                })
            } else {
              setIsClicked(() => {
                isClicked[i] = true
                return isClicked
              })
          
            }
            
            setSelectedCard1(i)
            setSelectedCard2(-1)
            
        }

        const countTrue = isClicked.filter(Boolean).length;
        if (countTrue === 15) {
          setIsOver(true)
        }
          
    }

    return (
        <div className="grid gap-2">
            <div className="grid grid-cols-4 gap-2">
                {shuffledCards.map((color, i) => (
                        <div key={i} className={`${isClicked[i] ? "bg-" + color + "-900" : "bg-slate-900"} md:size-24 size-20 rounded-md`}
                         onClick={() => {
                          audio.play()
                          handleClick (i as number)
              
                        }}>
                        </div>
                    ))}
            </div>
        </div>
  )
}

export default Board