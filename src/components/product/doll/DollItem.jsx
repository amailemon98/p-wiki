import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const DollItem = ({ product }) => {
  const { productName, poketmonName, productPrice, productSize, productCount } =
    product;
  const nevigate = useNavigate();
  const [hover, setHover] = useState(true);
  return (
    <div
      className="doll_item"
      onClick={() => nevigate(`/product/doll/${poketmonName}`)}
    >
      <div
        onMouseOver={() => {
          setHover(false);
        }}
        onMouseLeave={() => {
          setHover(true);
        }}
        className="doll_img"
        style={
          hover
            ? {
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/poketmonDolls/${poketmonName}1.jpg)`,
              }
            : {
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/poketmonDolls/${poketmonName}2.jpg)`,
              }
        }
      ></div>
      <div>
        <div>{productName} 인형</div>
        <div>rating</div>
        <div className="price_font">
          {productPrice.toLocaleString("ko-KR")}원
        </div>
      </div>
    </div>
  );
};

export default DollItem;
