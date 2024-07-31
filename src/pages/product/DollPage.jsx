import React from "react";
import "../../assets/style/product/Doll.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import {
  Search,
  DollBox,
  Paging,
  QuickMenu,
  TypeMenu,
  DollMenu,
} from "../../components/product";

const DollPage = () => {
  return (
    <div>
      <Header />
      <main>
        <Search />
        <TypeMenu />
        <QuickMenu />
        <DollBox>
          <DollMenu />
        </DollBox>
        <Paging />
      </main>
      <Footer />
    </div>
  );
};

export default DollPage;
