import React from "react";
import { Link } from "react-router-dom";

const PagingNum = ({ pageNum, searchParams }) => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };
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
          onClick={scrollTop}
        >
          {searchParams.get("q") ? (
            <Link
              to={`http://localhost:3000/product/doll?q=${searchParams.get(
                "q"
              )}&nowPage=${item}&nowBlock=${searchParams.get("nowBlock")}`}
            >
              {item + 1}
            </Link>
          ) : (
            <Link
              to={`http://localhost:3000/product/doll?nowPage=${item}&nowBlock=${searchParams.get(
                "nowBlock"
              )}`}
            >
              {item + 1}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default PagingNum;
