import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";

function App() {
  return (
    <div className="App">
      <header>
        <ul className="flex gap-48">
          <li><a href="/">Home</a></li>
        </ul>
      </header>

      <Routes>
        <Route path="/" element={ <Home /> } />
      </Routes>

      <footer>footer</footer>
      
    </div>
  );
}

export default App;
