import React from "react";
import "../../assets/style/product/Main.css";
import { DollBox, DollMenu, Paging, TypeMenu } from ".";

const Main = () => {
  return (
    <main>
      <TypeMenu />
      <DollBox>
        <DollMenu />
      </DollBox>
      <Paging />
    </main>
  );
};

export default Main;
