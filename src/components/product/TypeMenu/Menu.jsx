import React, { useEffect, useState } from "react";
import MenuDetail from "./MenuDetail";
import types from "../../../api/pokemonType.json";
import style from "../../../assets/style/product/TypeMenu.module.css";
import { motion } from "framer-motion";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const Menu = () => {
  const [pokemonType, setPokemonType] = useState([]);
  const [typeArr, setTypeArr] = useState([]);
  const [down, setDown] = useState(false);

  useEffect(() => {
    // async function getType() {
    //   const res = await fetch("https://pokeapi.co/api/v2/type");
    //   const jsonData = await res.json();
    //   setPokemonType(jsonData.results);
    // }
    // getType();
    setPokemonType(types);
  }, []);
  return (
    <nav className={style.product_menu_box}>
      <div className={style.down_menuBtn} onClick={() => setDown(!down)}>
        {down ? <FaArrowUp /> : <FaArrowDown />}
      </div>
      <motion.ul
        className={style.product_menu}
        animate={down ? { height: 180 } : { height: 0 }}
      >
        {pokemonType.map((type) => (
          <MenuDetail type={type} typeArr={typeArr} setTypeArr={setTypeArr} />
        ))}
      </motion.ul>
    </nav>
  );
};

export default Menu;
