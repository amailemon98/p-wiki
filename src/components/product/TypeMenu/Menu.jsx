import React, { useEffect, useState } from "react";
import MenuDetail from "./MenuDetail";
import types from "../../../api/pokemonType.json";
import style from "../../../assets/style/product/Menu.module.css";
const Menu = () => {
  const [pokemonType, setPokemonType] = useState([]);
  const [checkTwo, setCheckTwo] = useState([]);
  console.log(checkTwo);

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
      <ul className={style.product_menu}>
        {pokemonType.map((type) => (
          <MenuDetail
            type={type}
            checkTwo={checkTwo}
            setCheckTwo={setCheckTwo}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
