import { languages } from "../languages.js"

export default function Languages(props){
    return(
        <>
            {languages.map((lang, index)=>{
                const isLost = index < props.wrongGuessesCount
                return (
                <span className={`chip ${isLost ? "lost": ""}`}
                    key={lang.name}
                    style={{
                        backgroundColor: lang.backgroundColor,
                        color: lang.color
                    }}
                >
                    {lang.name}
                </span>
                )
            })}

        </>
    )
}