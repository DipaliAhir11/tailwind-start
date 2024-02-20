import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Save <code>src/App.js</code> and save to reload.
        </p>
        <p>
        Just press the shortcut key (Alt+Shift+L) to add Lorem Ipsum text. Keep pressing to add more. Alternatively, you can also specify the number of paragraphs, by writing a number, and pressing the shortcut key.
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
  );
}

export default App;
