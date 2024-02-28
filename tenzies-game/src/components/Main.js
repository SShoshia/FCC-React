import React from "react"
import GameScreen from "./GameScreen"
import data from "../data/data"

export default function Main() {
    return (
        <div className="main-container">
            <GameScreen
            {...data}
            />
        </div>
    )
}
