import React, { useEffect, useState } from "react";
import style from "../../../assets/style/product/Menu.module.css";
const MenuDetail = ({ type, checkTwo, setCheckTwo }) => {
  const [check, setCheck] = useState(false);

  const checkTwoHandle = () => {
    if (!check) {
      setCheckTwo([...checkTwo, "1"]);
    } else {
      checkTwo.pop();
      setCheckTwo(checkTwo);
    }
  };

  return (
    <li className={style.menu_font}>
      <label
        htmlFor={type.id}
        style={
          check
            ? { background: type.color, color: "#fff" }
            : { background: "transparent", color: "#666" }
        }
      >
        {type.ko}
      </label>
      <input
        type="checkbox"
        id={type.id}
        value={check}
        onChange={(e) => {
          checkTwoHandle();
          if (checkTwo.length > 1) {
            window.alert("타입은 두개까지 선택 가능합니다.");
            checkTwo.pop();
            setCheckTwo(checkTwo);
            return;
          }
          setCheck(!check);
        }}
      />
    </li>
  );
};

export default MenuDetail;
