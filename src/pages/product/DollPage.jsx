import React from "react";
import "../../assets/style/product/Doll.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import {
  Search,
  Menu,
  BasketShort,
  DollBox,
  Paging,
} from "../../components/product/doll";

const DollPage = () => {
  return (
    <div>
      <Header />
      <main>
        <Search />
        <Menu />
        <BasketShort />
        <Paging />
        <DollBox />
      </main>
      <Footer />
    </div>
  );
};

export default DollPage;
