import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Product } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
