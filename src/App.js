//import logo from './logo.svg';
import './App.css';

function App() {


  return (
    <div id="wrapper">
      {/*
      <div className="App">
        <header className="App-header">
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
        </header>
      </div>
      */}
      <div id="quote-box">
        <div class="quote-text">
          <i class="fas fa-quote-left"> </i><span id="text"></span>
        </div>
        <div class="quote-author">- <span id="author"></span></div>
        <div class="buttons">
          <a
            class="button"
            id="tweet-quote"
            title="Tweet this quote!"
            target="_top"
          >
            <i class="fab fa-twitter"></i>
          </a>
          <button class="button" id="new-quote">New quote</button>
        </div>
      </div>
    </div>
  );
}

export default App;
