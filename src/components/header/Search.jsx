import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const [focus, setFocus] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  return (
    <div className="product_search_box">
      <div className="product_input_box" title="검색어를 입력하세요!!">
        <input
          type="text"
          id="pdt_search"
          name="pdt_search"
          onFocus={() => setFocus(true)}
          onBlur={() => {
            if (!searchVal.trim().length) {
              setFocus(false);
              setSearchVal("");
            } else {
              setSearchVal(searchVal.trim());
            }
          }}
          onChange={(e) => setSearchVal(e.target.value)}
          value={searchVal}
        />
        <motion.label
          htmlFor="pdt_search"
          animate={
            focus
              ? {
                  y: -28,
                  fontWeight: 700,
                  opacity: 1,
                  fontSize: "20px",
                }
              : {}
          }
          transition={{
            ease: "linear",
            duration: 0.1,
          }}
        >
          search
          <img
            src={`${process.env.PUBLIC_URL}/images/header/pikachu_happy_icon.svg`}
            alt=""
          />
        </motion.label>
      </div>
      <button>
        <FaSearch />
      </button>
    </div>
  );
};

export default Search;
