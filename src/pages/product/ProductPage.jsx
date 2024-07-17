import React from "react";
import "../../assets/style/product/Product.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import {
  Search,
  Menu,
  BasketShort,
  DollBox,
  Paging,
} from "../../components/product";

const ProductPage = () => {
  return (
    <div>
      <Header />
      <main>
        <Search />
        <Menu />
        <BasketShort />
        <Paging />
        <DollBox />
        <Paging />
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
