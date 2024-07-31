import React from "react";

const DollMenu = () => {
  return (
    <div className="doll_menu">
      <div>총 상품 개수</div>
      <ul className="product_sort">
        <li>낮은가격순</li>
        <li>높은가격순</li>
        <li>상품후기순</li>
      </ul>
    </div>
  );
};

export default DollMenu;
