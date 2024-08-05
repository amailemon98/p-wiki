import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DollHeart from "./DollHeart";
import StarRating from "../starRating/StarRating";

const DollItem = ({ product }) => {
  const { productName, pokemonName, productPrice, productSize, productCount } =
    product;
  const nevigate = useNavigate();
  const [hover, setHover] = useState(true);
  return (
    <div className="doll_item">
      <DollHeart />
      <div
        className="content"
        onClick={() => nevigate(`/product/doll/${pokemonName}`)}
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
                  backgroundImage: `url(${process.env.PUBLIC_URL}/images/pokemonDolls/${pokemonName}1.jpg)`,
                }
              : {
                  backgroundImage: `url(${process.env.PUBLIC_URL}/images/pokemonDolls/${pokemonName}2.jpg)`,
                }
          }
        ></div>
        <div>
          <div>{productName} 인형</div>
          <div>
            <StarRating />
          </div>
          <div className="price_font">
            {productPrice.toLocaleString("ko-KR")}원
          </div>
        </div>
      </div>
    </div>
  );
};

export default DollItem;
