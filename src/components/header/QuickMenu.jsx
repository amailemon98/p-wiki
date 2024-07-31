import React from "react";
import style from "../../assets/style/header/QuickMenu.module.css";
import { PiBasketFill } from "react-icons/pi";

const QuickMenu = () => {
  return (
    <ul className={style.lnb}>
      <li>
        <img
          src={`${process.env.PUBLIC_URL}/images/header/icon_ball_c.jpg`}
          alt="몬스터볼 이미지"
        />
        <span>포켓몬 도감</span>
      </li>
      <li>
        <img
          src={`${process.env.PUBLIC_URL}/images/header/icon_login.jpg`}
          alt="로그인 이미지"
        />
        <span>로그인</span>
      </li>
      <li>
        <PiBasketFill />
        <span>장바구니</span>
      </li>
    </ul>
  );
};

export default QuickMenu;
