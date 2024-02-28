import './App.css';
import Header from "./components/Header";
import Page from "./components/Page";
import getData from "./data/data_provider";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        
      </header> */}
      <body className="App-body">
        <div>
          <Header/>
          <Page data={getData()}/>
        </div>
      </body>
    </div>
  );
}

export default App;
