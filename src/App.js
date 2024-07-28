import { Routes, Route, Link } from "react-router-dom";
import Home from "./routes/home/Home";
import Wiki from "./routes/wiki/Wiki";
import styles from './App.module.css'
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App flex flex-col">
      <header className="fixed top-0 w-full">
        <h1 className="text-center bg-p-red text-cyan-50 flex justify-center cursor-pointer">
          <Link to={"/"} className={styles.titleImg}></Link>
        </h1>
        <Navbar />
      </header>

      <body className="pt-[93px] w-full h-screen flex justify-center">
        <div className="w-[60%] h-full">
          <div className={styles.mainBody}>
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/wiki" element={ <Wiki /> } />
          </Routes>
          </div>
        </div>
      </body>

      <footer className="bg-p-blue fixed bottom-0 w-screen h-[50px]">footer</footer>
      
    </div>
  );
}

export default App;
