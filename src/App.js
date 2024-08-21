import { Route, Routes, Link } from "react-router-dom";
import {
  Basket,
  Doll,
  DollDetail,
  Login,
  Register,
  SearchId,
  SearchPw,
} from "./routes";
import ShopLayout from "./layout/ShopLayout";
import Home from "./routes/home/Home";
import Wiki from "./routes/wiki/Wiki";
// import styles from './App.module.css'
// import Navbar from "./components/navbar/Navbar";
import WikiDetail from "./routes/wiki/WikiDetail";
import { Fragment } from "react";
import WikiLayout from "./layout/WikiLayout";
import WikiBodyLayout from "./layout/WikiBodyLayout";

function App() {
  return (
    <Fragment>
      <Routes>
      
      <Route element={<WikiBodyLayout />}>
        <Route element={<WikiLayout />}>
              <Route path="/" element={ <Home /> } />
              <Route path="/wiki" element={ <Wiki /> } />
              <Route path="/wiki/:id" element={ <WikiDetail /> } />
        </Route>
      </Route>
        <Route element={<ShopLayout />}>
          <Route path="/account">
            <Route path="sign_in" element={<Login />} />
            <Route path="sign_up" element={<Register />} />
            <Route path="search_id" element={<SearchId />} />
            <Route path="search_pw" element={<SearchPw />} />
          </Route>
          <Route path="/product">
            <Route path="doll">
              <Route index element={<Doll />} />
              <Route path=":pokemonName" element={<DollDetail />} />
            </Route>
            <Route path="basket" element={<Basket />} />
          </Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
