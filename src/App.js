import logo from './logo.svg';
import './App.css';
import IntroHeader from './Components/IntroHeader';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <IntroHeader/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          unga bunga :)
        </a>
      </header>
    </div>
  );
}

export default App;
