import React, { useEffect, useState } from "react";
import DollItem from "./DollItem";
import { useSearchParams } from "react-router-dom";

const DollBox = ({ children }) => {
  const [products, setProduct] = useState([]);
  const [pendding, setPendding] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    async function getData() {
      try {
        let nowPage = searchParams.get("nowPage");
        if (!nowPage) {
          nowPage = "0";
        }
        const res = await fetch(`/api/shop?nowPage=${nowPage}`);
        const productData = await res.json();
        if (productData) {
          setProduct(productData);
          setPendding(true);
        } else {
          setPendding(false);
        }
      } catch (err) {
        setPendding(false);
        console.log(err);
      }
    }
    getData();
  }, [searchParams]);

  return (
    <div className="product_content">
      {children}
      <div className="doll_box">
        {pendding ? (
          products.map((item) => (
            <DollItem key={item.poketmonName} product={item} />
          ))
        ) : (
          <div>로딩중.....</div>
        )}
      </div>
    </div>
  );
};

export default DollBox;
