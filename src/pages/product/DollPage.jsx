import React from "react";
import "../../assets/style/product/Doll.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import {
  Search,
  BasketShort,
  DollBox,
  Paging,
  Menu,
} from "../../components/product";

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
