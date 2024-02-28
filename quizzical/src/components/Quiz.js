import React from "react"
import Question from "./Question"

export default function Quiz(props) {
    const [quizDone, setQuizDone] = React.useState(false)
    const [correctAnswers, setCorrectAnswers] = React.useState(0)
    
    let quizQuestions = []
    for(let i = 0; i < props.quiz.length; i++) {
        quizQuestions.push(<Question {...props.quiz[i]} quizDone={quizDone} 
            onCorrectAnswer={() => {setCorrectAnswers(old => old+1)}}
            onUndoCorrectAnswer={() => {setCorrectAnswers(old => old-1)}}/>)
    }

    return (
        <div className="quiz-page-container">
            <div className="quiz-container">
                {quizQuestions}
            </div>
            <div className="quiz-btn-container">
                {quizDone 
                ? 
                    <span>
                        <p className="quiz-results">You scored {`${correctAnswers}/${quizQuestions.length}`} correct answers</p>
                        <button className="btn play-again-btn" onClick={props.onPlayAgain}>Play again</button>
                    </span> 
                : 
                    <button className="btn check-answers-btn" onClick={() => setQuizDone(true)}>Check answers</button>}
            </div>
        </div>
    )
}
