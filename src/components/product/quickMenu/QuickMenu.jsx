import React from "react";
import style from "../../../assets/style/product/QuickMenu.module.css";
import Register from "./register/Register";
import Login from "./login/Login";
import Basket from "./basket/Basket";

const QuickMenu = () => {
  return (
    <div className={style.quick_menu}>
      <Login />
      <Register />
      <Basket />
    </div>
  );
};

export default QuickMenu;
