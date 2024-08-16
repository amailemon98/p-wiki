import { Routes, Route, Link } from "react-router-dom";
import Home from "./routes/home/Home";
import Wiki from "./routes/wiki/Wiki";
import styles from './App.module.css'
import Navbar from "./components/navbar/Navbar";
import PokeMain from "./components/pokeMain/PokeMain";
import WikiDetail from "./routes/wiki/WikiDetail";

function App() {
  return (
    <div className="App flex flex-col w-full">
      <header className="fixed top-0 w-full">
        <h1 className="text-center bg-newP-red text-cyan-50 flex justify-center cursor-pointer">
          <Link to={"/"} className={styles.titleImg}></Link>
          {/* <PokeMain /> */}
        </h1>
        <Navbar />
      </header>

      <body className="pt-[93px] w-full flex justify-center">
        <div className="w-[100%] lg:w-[80%] xl:w-[75%]">
          <div className={styles.mainBody}>
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/wiki" element={ <Wiki /> } />
            <Route path="/wiki/:id" element={ <WikiDetail /> } />
          </Routes>
          </div>
        </div>
      </body>


      <footer className="bg-p-beige3 fixed bottom-0 w-screen h-[50px]">footer</footer>
      
    </div>
  );
}

export default App;
