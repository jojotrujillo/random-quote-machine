import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div id="quote-box">
      <span id="text">
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
          Learn React
        </a>
      </span>
    </div>
  );
}

export default App;
