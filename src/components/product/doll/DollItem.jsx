import React from "react";

const DollItem = ({ product }) => {
  const { productName, poketmonName, productPrice, productSize, productCount } =
    product;

  return (
    <div className="doll_item">
      <div>
        <a href={`/product/doll/${poketmonName}`}>
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/images/poketmonDolls/${poketmonName}1.jpg`}
              alt={poketmonName}
            />
          </div>
          <div>{productName}</div>
          <div>{productPrice.toLocaleString("ko-KR")}원</div>
          <div>rating</div>
        </a>
      </div>
      <div>
        <button>장바구니 추가(장바구니 모달창)</button>
      </div>
    </div>
  );
};

export default DollItem;
