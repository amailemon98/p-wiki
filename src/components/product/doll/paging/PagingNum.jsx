import React from "react";
import PagingNumItem from "./PagingNumItem";
import { useProduct } from "../../../../contexts/ProductContext";

const PagingNum = ({ pageNum }) => {
  const { searchParams } = useProduct();
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };
  return (
    <ul>
      {pageNum.map((item) => {
        return (
          <li
            key={item}
            style={
              item === +searchParams.get("nowPage")
                ? { fontWeight: "bold" }
                : { fontWeight: "normal" }
            }
            onClick={scrollTop}
          >
            <PagingNumItem num={item} />
          </li>
        );
      })}
    </ul>
  );
};

export default PagingNum;
