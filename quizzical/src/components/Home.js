import React from "react"

export default function Home(props) {
    return (
        <div className="home-page-container">
            <h1 className="home-page-app-title">Quizzical</h1>
            <p className="home-page-app-description">Enter the realm of quizdom and prepare to be quizzled, puzzled, and amused!</p>
            <div className="quiz-start-container">
                <label className="input-question-amount-label">
                    Choose the number of questions:
                    <input 
                        type="number"
                        min="1"
                        max="20"
                        value={props.questionAmount}
                        className="input-question-amount"
                        onChange={(e) => {const v = e.target.value; if(v >= 1 && v <= 20) props.updateQuestionAmount(v)}}
                    />
                </label>
                <button className="btn home-page-start-quiz-btn" onClick={() => props.onClick()}>Start quiz</button>
            </div>
        </div>
    )
}
