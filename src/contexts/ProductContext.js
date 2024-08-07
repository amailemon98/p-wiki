import { createContext, useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import dollData from "../api/dollData.json";
const productContext = createContext(null);

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [pendding, setPendding] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();

  const useAuth = (page, block) => {
    let urlObj = {
      q: "",
      order: "",
      nowPage: ``,
      nowBlock: ``,
    };
    if (searchParams.get("q")) {
      urlObj.q = `&q=${searchParams.get("q")}`;
    }
    if (searchParams.get("order")) {
      urlObj.order = `&order=${searchParams.get("order")}`;
    }
    if (page) {
      urlObj.nowPage = `&nowPage=${page}`;
    }
    if (!block) {
      urlObj.nowBlock = `&nowBlock=0`;
    }

    const { q, order, nowPage, nowBlock } = urlObj;
    const result = `/product/doll?${q}${order}${nowPage}${nowBlock}`;
    return result.replace("&", "");
  };

  useEffect(() => {
    const setNowPageDate = () => {
      if (!searchParams.get("nowPage")) {
        searchParams.set("nowPage", 0);
      }
      if (!searchParams.get("nowBlock")) {
        searchParams.set("nowBlock", 0);
      }
    };
    setNowPageDate();
    // spring boot
    // async function getData() {
    //   try {
    //     const res = await fetch(
    //       `/api/shop?nowPage=${searchParams.get("nowPage")}`
    //     );
    //     const productData = await res.json();
    //     if (productData) {
    //       setProduct(productData);
    //       setPendding(true);
    //     } else {
    //       setPendding(false);
    //     }
    //   } catch (err) {
    //     setPendding(false);
    //     console.log(err);
    //   }
    // }

    const getData = () => {
      let data = [];
      if (searchParams.get("q")) {
        dollData.map(
          (doll) =>
            doll.productName.indexOf(searchParams.get("q")) !== -1 &&
            data.push(doll)
        );
      } else {
        data = dollData;
      }
      const sortLowPrice = () => {
        const sortProducts = [...data].sort((a, b) => {
          return a.productPrice - b.productPrice;
        });
        return sortProducts;
      };
      const sortHighPrice = () => {
        const sortProducts = [...data].sort((a, b) => {
          return b.productPrice - a.productPrice;
        });
        return sortProducts;
      };
      if (searchParams.get("order") === "desc") {
        data = sortLowPrice();
      } else if (searchParams.get("order") === "asc") {
        data = sortHighPrice();
      }
      setProducts(data);
    };
    getData();
  }, [searchParams]);

  return (
    <productContext.Provider
      value={{ products, setProducts, pendding, searchParams, useAuth }}
    >
      {children}
    </productContext.Provider>
  );
};

const useProduct = () => useContext(productContext);

export { ProductProvider, useProduct };
