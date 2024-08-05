import React from "react";
import dollData from "../../../../api/dollData.json";
const DollMenu = () => {
  return (
    <div className="doll_menu">
      <div>{`총 ${dollData.length}개의 상품`}</div>
      <ul className="product_sort">
        <li>낮은가격순</li>
        <li>높은가격순</li>
        <li>상품후기순</li>
      </ul>
    </div>
  );
};

export default DollMenu;
