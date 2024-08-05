import React from "react";
import { ProductDetailProvider } from "../../../contexts/ProductDetailContext";
import DollDetailBox from "./DollDetailBox";

const Main = () => {
  return (
    <ProductDetailProvider>
      <DollDetailBox />
    </ProductDetailProvider>
  );
};

export default Main;
