import React from "react"

export default function GameScreen(props) {
    const randomDiceValue = () => Math.floor(Math.random() * (6)) + 1

    const [isGameOn, setIsGameOn] = React.useState(true)
    const [diceValues, setDiceValues] = React.useState(Array.from({ length: props.diceCount }, randomDiceValue))
    const [dicesFrozen, setDicesFrozen] = React.useState(Array.from({ length: props.diceCount }, () => false))
    const [dicesWrong, setDicesWrong] = React.useState(Array.from({ length: props.diceCount }, () => false))

    const handleDiceClick = (i) => {
        const frozenDicesValue = diceValues.reduce((acc, c, ind) => {
            return dicesFrozen[ind] ? c : acc
        }, 0)
        if (frozenDicesValue === 0 || diceValues[i] === frozenDicesValue) {
            setDicesFrozen(old => {
                const res = old.map((o, ind) => ind === i ? true : o)
                const gameOver = res.reduce((acc, c) => acc && c, true)
                if (gameOver) {
                    setIsGameOn(false)
                }
                return res
            })
        } else {
            setDicesWrong(old => old.map((o, ind) => ind === i ? true : o))
            setTimeout(() => {
                setDicesWrong(old => old.map((o, ind) => ind === i ? false : o))    
            }, 1000);
        }
    }

    let dice = []
    for(let i = 0; i < props.diceCount; i++) {
        dice.push(<button 
            className={`die ${dicesFrozen[i] && "frozen-die"} ${dicesWrong[i] && "wrong-die"}`}
            onClick={() => handleDiceClick(i)}>
                {diceValues[i]}
            </button>)
    }

    const handleButtonClick = (event) => {
        if (event.target.textContent === "Roll") {
            setDiceValues(old => old.map((o, i) => dicesFrozen[i] ? o : randomDiceValue()))
        } else {
            setIsGameOn(true)
            setDiceValues(Array.from({ length: props.diceCount }, randomDiceValue))
            setDicesFrozen(Array.from({ length: props.diceCount }, () => false))
        }
    }

    return (
        <div className="game-screen-container">
            <h1 className="game-title">{props.gameTitle}</h1>
            <p className="game-description">{props.gameDescription}</p>
            <div className="dice-container">
                {dice}
            </div>
            <button className="roll-button" onClick={handleButtonClick}>{isGameOn ? "Roll" : "Reset Game"}</button>
        </div>
    )
}
