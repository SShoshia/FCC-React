import './App.css';
import Footer from './components/Footer';
import Info from './components/Info';
import About from './components/About';
import Interests from './components/Interests';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        
      </header> */}
      <body className="App-body">
        <div>
          <Info/>
          <About/>
          <Interests/>
          <Footer/>
        </div>
      </body>
    </div>
  );
}

export default App;
