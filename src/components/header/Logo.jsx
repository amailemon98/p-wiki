import React from "react";

const Logo = () => {
  return (
    <div className="Logo_img">
      <img
        src={`${process.env.PUBLIC_URL}/images/header/main_logo.jpg`}
        alt="로고 이미지"
      />
    </div>
  );
};

export default Logo;
