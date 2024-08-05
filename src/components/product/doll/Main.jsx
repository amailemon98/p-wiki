import React from "react";
import "../../../assets/style/product/Doll.css";
import { DollBox, DollMenu, Paging } from ".";
import { ProductProvider } from "../../../contexts/ProductContext";

const Main = () => {
  return (
    <ProductProvider>
      <DollBox>
        <DollMenu />
      </DollBox>
      <Paging />
    </ProductProvider>
  );
};

export default Main;
