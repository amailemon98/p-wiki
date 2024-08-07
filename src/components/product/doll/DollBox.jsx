import React, { useEffect, useState } from "react";
import DollItem from "./DollItem";
import DollMenu from "./dollMenu/DollMenu";
import Paging from "./paging/Paging";
import { useProduct } from "../../../contexts/ProductContext";

const DollBox = () => {
  const { products, pendding, searchParams } = useProduct();
  const [viewProducts, SetViewProducts] = useState([]);
  // lastPage: Math.ceil(products.length / pagePerProduct)
  // lastBlock: Math.floor(lastPage / blockPerPage)
  const pageJson = {
    totalProduct: products.length,
    pagePerProduct: 20,
    lastPage: Math.ceil(products.length / 20),
    blockPerPage: 2,
    lastBlock: Math.floor(Math.ceil(products.length / 20) / 2),
  };
  console.log(products);
  useEffect(() => {
    let arr = [];
    for (let i = 0; i < pageJson.pagePerProduct; i++) {
      if (
        pageJson.pagePerProduct * searchParams.get("nowPage") + i >=
        products.length
      ) {
        break;
      }
      let index = pageJson.pagePerProduct * searchParams.get("nowPage") + i;
      arr.push(products[index]);
    }
    SetViewProducts(arr);
    console.log("products바뀜");
  }, [products, searchParams]);

  return (
    <div className="product_content">
      <DollMenu SetViewProducts={SetViewProducts} />
      <div className="doll_box">
        {pendding ? (
          viewProducts.length ? (
            viewProducts.map((item) => (
              <DollItem key={item.pokemonName} product={item} />
            ))
          ) : (
            <div>상품을 찾을수 업습니다</div>
          )
        ) : (
          <div>로딩중.....</div>
        )}
      </div>
      <Paging pageJson={pageJson} />
    </div>
  );
};

export default DollBox;
