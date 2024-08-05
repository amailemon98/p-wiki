import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";
import ShortMenu from "../components/shortMenu/ShortMenu";
import ScrollToTop from "../components/scroll/ScrollToTop";

const ShopLayout = () => {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <ShortMenu />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default ShopLayout;
