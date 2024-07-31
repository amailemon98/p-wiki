import React, { useState } from "react";
import style from "../../../assets/style/product/TypeMenu.module.css";
const MenuDetail = ({ type, typeArr, setTypeArr }) => {
  const [check, setCheck] = useState(false);

  const checkTypeArr = () => {
    if (!check) {
      setTypeArr([...typeArr, type.en]);
    } else {
      typeArr.pop();
      setTypeArr(typeArr);
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
          checkTypeArr();
          if (typeArr.length > 1) {
            window.alert("타입은 두개까지 선택 가능합니다.");
            typeArr.pop();
            setTypeArr(typeArr);
            return;
          }
          setCheck(!check);
        }}
      />
    </li>
  );
};

export default MenuDetail;
