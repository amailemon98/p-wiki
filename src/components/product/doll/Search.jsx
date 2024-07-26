import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const [focus, setFocus] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  return (
    <div className="product_search_box">
      <div className="product_input_box">
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
              ? { y: -24, fontSize: "16px", color: "#444", fontWeight: "bold" }
              : {}
          }
          transition={{
            ease: "circOut",
          }}
        >
          search
        </motion.label>
      </div>
      <button>
        <FaSearch />
      </button>
    </div>
  );
};

export default Search;
