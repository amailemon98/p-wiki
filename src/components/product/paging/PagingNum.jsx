import React from "react";

const PagingNum = ({ pageNum, searchParams }) => {
  pageNum.map((item) => {
    console.log(item, +searchParams.get("nowPage") + 1);
  });
  return (
    <ul>
      {pageNum.map((item) => (
        <li
          key={item}
          style={
            item === +searchParams.get("nowPage")
              ? { fontWeight: "bold" }
              : { fontWeight: "normal" }
          }
        >
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
