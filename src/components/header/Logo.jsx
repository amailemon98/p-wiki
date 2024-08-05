import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="Logo_img" title="홈">
      <Link to={"/"}>
        <img
          src={`${process.env.PUBLIC_URL}/images/header/main_logo.jpg`}
          alt="로고 이미지"
        />
      </Link>
    </div>
  );
};

export default Logo;
