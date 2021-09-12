import logo from "./logo.svg";
import "./App.css";
import dotenv from "dotenv";

function App() {
  dotenv.config();
  const env = process.env.REACT_APP_API_URL;
  console.log("env", env);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This is Docker Test React Project</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Docker github actions paid test build... Success!!! wowwwww!!!
        </a>
        <h1>{process.env.REACT_APP_API_URL}, hi</h1>
        <h2>{process.env.REACT_APP_HI}</h2>
      </header>
    </div>
  );
}

export default App;
