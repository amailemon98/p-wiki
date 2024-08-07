import React from "react";
import { useProduct } from "../../../../contexts/ProductContext";
import { Link, useNavigate } from "react-router-dom";
const DollMenu = () => {
  const { products, setProducts, searchParams } = useProduct();
  const navigate = useNavigate();
  return (
    <div className="doll_menu">
      <div>{`총 ${products.length}개의 상품`}</div>
      <ul className="product_sort">
        {searchParams.get("q") ? (
          <li
            onClick={() =>
              navigate(
                `/product/doll?q=${searchParams.get(
                  "q"
                )}&nowPage=${searchParams.get(
                  "nowPage"
                )}&nowBlock=${searchParams.get("nowBlock")}&order=desc`
              )
            }
          >
            낮은가격순
          </li>
        ) : (
          <li
            onClick={() =>
              navigate(
                `/product/doll?&nowPage=${searchParams.get(
                  "nowPage"
                )}&nowBlock=${searchParams.get("nowBlock")}&order=desc`
              )
            }
          >
            낮은가격순
          </li>
        )}
        <li>높은가격순</li>
        <li>상품후기순</li>
      </ul>
    </div>
  );
};

export default DollMenu;
