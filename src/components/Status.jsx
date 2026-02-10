import clsx from 'clsx'
import { getFarewellText } from '../utils.js'

export default function Status(props) {
    const gameStatusClass = clsx("status",{
        won: props.gameWon,
        lost: props.gameLost,
        farewell: !props.gameOver && props.showFarewell
    })

    function renderGameStatus(){
        if(!props.gameOver && props.showFarewell){
            return <p>{getFarewellText(props.farewell)}</p>
        }
        if (!props.gameOver) {
            return null
        }
        
        if (props.gameWon) {
            return (
                <>
                    <h4>You win!</h4>
                    <p>Well done! 🎉</p>
                </>
            )
        }else {
            return (
                <>
                    <h4>Game over!</h4>
                    <p>You lose! Better start learning Assembly 😭</p>
                </>
            )
        }
    }

    return (
        <div 
            aria-live="polite" 
            role="status" 
            className={gameStatusClass}
        >
            {renderGameStatus()}
        </div>
    )
}