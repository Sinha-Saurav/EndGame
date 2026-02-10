export default function KeyboardElements(props){
    const alphabet = "qwertyuiopasdfghjklzxcvbnm"
    const alphabetArr = alphabet.split("")

    return (
        <>
            {alphabetArr.map((letter)=>(
                <button 
                    className={props.getKeyClass(letter)}
                    key={letter} 
                    onClick={() => props.addLetter(letter)} 
                    disabled={props.gameOver}
                    aria-disabled={props.gameOver}
                    aria-label={`Letter ${letter}`}
                >
                    {letter.toUpperCase()}
                </button>
                )
            )}
        </>
    )
}