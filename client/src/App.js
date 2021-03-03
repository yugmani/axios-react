import logo from "./logo.svg";
import "./App.css";
import DataFetching from "./components/DataFetching";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <DataFetching />
    </div>
  );
}

export default App;
