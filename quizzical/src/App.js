import './App.css';
import React from "react"
import Home from './components/Home'
import Quiz from './components/Quiz'

function App() {
  const [quiz, setQuiz] = React.useState(undefined)
  const [questionAmount, setQuestionAmount] = React.useState(5)
  
  const handleStartQuiz = () => {
    fetch(`https://opentdb.com/api.php?amount=${questionAmount}`)
    .then(response => response.json())
    .then(data => {
      setQuiz(data.results)
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }

  const handlePlayAgain = () => {
    setQuiz(undefined)
  }

  return (
    <div className="App">
      {/* <header className="App-header">
        
      </header> */}
      <body className="App-body">
        {!quiz && <Home onClick={handleStartQuiz} questionAmount={questionAmount} updateQuestionAmount={(val) => {setQuestionAmount(val)}}/>}
        {quiz && <Quiz quiz={quiz} onPlayAgain={handlePlayAgain}/>}
      </body>
    </div>
  );
}

export default App;
