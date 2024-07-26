import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Doll, DollDetail } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/product">
          <Route path="doll">
            <Route index element={<Doll />}></Route>
            <Route path=":poketmonName" element={<DollDetail />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
