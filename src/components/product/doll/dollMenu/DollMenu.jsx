import React from "react";
import { useProduct } from "../../../../contexts/ProductContext";
const DollMenu = () => {
  const { products, setProducts } = useProduct();
  const sortLowPrice = () => {
    const sortProducts = [...products].sort((a, b) => {
      return a.productPrice - b.productPrice;
    });
    setProducts(sortProducts);
  };

  return (
    <div className="doll_menu">
      <div>{`총 ${products.length}개의 상품`}</div>
      <ul className="product_sort">
        <li onClick={sortLowPrice}>낮은가격순</li>
        <li>높은가격순</li>
        <li>상품후기순</li>
      </ul>
    </div>
  );
};

export default DollMenu;
