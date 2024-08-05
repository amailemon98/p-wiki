import React, { Fragment } from "react";
import "../../../assets/style/product/DollDetail.css";
import { useProductDetail } from "../../../contexts/ProductDetailContext";
import DollDetailBtn from "./DollDetailBtn";
import DollDetailSub from "./DollDetailSub/DollDetailSub";

const DollDetailBox = () => {
  const { doll, isPendding } = useProductDetail();
  const { productName, pokemonName, productPrice, productSize, productCount } =
    doll;
  return (
    <Fragment>
      {isPendding ? (
        <div className="dollDetail_container">
          <div className="dollDetail_box">
            <div className="img_box">
              <div
                className="sub"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}/images/pokemonDolls/${pokemonName}2.jpg)`,
                }}
              ></div>
              <div
                className="main"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}/images/pokemonDolls/${pokemonName}1.jpg)`,
                }}
              ></div>
            </div>
            <div className="info_box">
              <div>별점</div>
              <div className="name">{productName} 인형</div>
              <div className="price">
                {productPrice?.toLocaleString("ko-KR")}원
              </div>
              <div className="size">{productSize}</div>
              {productCount < 10 && <div>{productCount}개 남았음!!!</div>}
              <DollDetailBtn />
            </div>
          </div>
          <DollDetailSub />
        </div>
      ) : (
        <div>로딩중....</div>
      )}
    </Fragment>
  );
};

export default DollDetailBox;
