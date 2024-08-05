import React from "react";
import { Link } from "react-router-dom";

const NoProductShort = () => {
  return (
    <div className="noProduct_shortMenu" title="포켓몬 스토어">
      <Link to={"/product/doll"}>
        <img
          src={`${process.env.PUBLIC_URL}/images/shortMenu/Logo_store.jpg`}
          alt="포켓몬 스토어"
        />
      </Link>
    </div>
  );
};

export default NoProductShort;
