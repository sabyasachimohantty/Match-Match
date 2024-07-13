import { Dispatch, SetStateAction } from "react"

const Popup = ({setIsOver, handleClick} : { setIsOver: Dispatch<SetStateAction<boolean>>, handleClick: () => void }) => {

    

  return (
    <div className="h-screen w-screen flex justify-center items-center fixed top-0 left-0">
        <div className="h-48 w-80 bg-slate-800 flex flex-col justify-center items-center text-white rounded-md gap-5">
            <div className="text-3xl font-extrabold">Game Over</div>
            <button type="button" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-slate-900 dark:focus:ring-gray-800"
                onClick={() => {
                    handleClick()
                    setIsOver(false)    
                }}>
                Play Again
            </button>
        </div>
    </div>
  )
}

export default Popup