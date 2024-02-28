import React from "react"

const htmlDecode = (input) => {
    var doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
}

export default function Question(props) {
    const [selectedAnswer, setSelectedAnswer] = React.useState(undefined)
    const [correct_answer_position] = React.useState(Math.floor(Math.random() * (props.incorrect_answers.length + 1)))

    const correctAnswerContent = htmlDecode(props.correct_answer)
    const answers = []
    for(let i = 0; i < props.incorrect_answers.length; i++) {
        let content = htmlDecode(props.incorrect_answers[i])
        let className = ""
        
        if(props.quizDone && !selectedAnswer) {
            className = "wrong-answer"
        }
        if(selectedAnswer === content) {
            className = props.quizDone ? "wrong-answer" : "selected-answer"
        }
        answers.push(<button className={`answer ${className}`}
                            onClick={() => {
                                selectedAnswer === correctAnswerContent && props.onUndoCorrectAnswer()
                                setSelectedAnswer(content)
                            }}>{content}</button>)
    }

    const correctAnswerClassName = selectedAnswer === correctAnswerContent ? "selected-answer" : ""
    const correctAnswer = <button className={`answer ${props.quizDone ? "correct-answer" : correctAnswerClassName}`} 
                        onClick={() => {
                            setSelectedAnswer(correctAnswerContent)
                            props.onCorrectAnswer()
                        }}>{correctAnswerContent}</button>
    answers.splice(correct_answer_position, 0, correctAnswer)
    
    return (
        <div className="question-container">
            <h3 className="question-statement">{htmlDecode(props.question)}</h3>
            <span className="answers-container">
                {answers}
            </span>
            <hr/>
        </div>
    )
}
