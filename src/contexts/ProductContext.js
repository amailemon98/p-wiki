import { createContext, useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import dollData from "../api/dollData.json";
const productContext = createContext(null);

const ProductProvider = ({ children }) => {
  const [products, setProduct] = useState(dollData);
  const [pendding, setPendding] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();

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
      let arr = [];
      for (let i = 0; i < 20; i++) {
        if (20 * searchParams.get("nowPage") + i >= dollData.length) {
          break;
        }
        let index = 20 * searchParams.get("nowPage") + i;
        arr.push(dollData[index]);
      }
      setProduct(arr);
    };
    getData();
  }, [searchParams]);

  return (
    <productContext.Provider value={{ products, pendding, searchParams }}>
      {children}
    </productContext.Provider>
  );
};

const useProduct = () => useContext(productContext);

export { ProductProvider, useProduct };
