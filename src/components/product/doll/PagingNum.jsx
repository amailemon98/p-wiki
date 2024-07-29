import React from "react";
import { useSearchParams } from "react-router-dom";

const PagingNum = ({ pageNum }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <ul>
      {pageNum.map((item) => (
        <li key={item}>
          <a
            href={`http://localhost:3000/product/doll?nowPage=${item}&nowBlock=${searchParams.get(
              "nowBlock"
            )}`}
          >
            {item + 1}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default PagingNum;
