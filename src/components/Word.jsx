export default function Word(props) {
    return (
        <>
            {props.arr.map((letter, index) => {
                const shouldRevealLetter = props.gameLost || props.guessLetter.includes(letter)
                const missedLetter = props.gameLost &&  !props.guessLetter.includes(letter)
                return (
                <span key={index} className={`word ${missedLetter? 'lost': ''}`}>
                    {shouldRevealLetter ? letter.toUpperCase():""}
                </span>
            )})}
        </>
    )
}