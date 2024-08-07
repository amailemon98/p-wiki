import React, { useEffect, useState } from "react";
import style from "../../../../assets/style/product/doll/Paging.module.css";
import { useProduct } from "../../../../contexts/ProductContext";
import PagingNum from "./PagingNum";
import PagingRemote from "./PagingRemote";
const Paging = ({ pageJson }) => {
  // const [pageData, setPageData] = useState(pageJson);
  const [pageNum, setPageNum] = useState([]);
  const { searchParams } = useProduct();

  // spring boot
  // useEffect(() => {
  //   async function getPageData() {
  //     try {
  //       const res = await fetch(`/api/pageData`);
  //       const jsonData = await res.json();
  //       if (jsonData) {
  //         setPageData(jsonData);
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   getPageData();
  // }, []);

  useEffect(() => {
    const pagingHandle = () => {
      let arr = [];
      if (pageJson) {
        const { blockPerPage, lastPage } = pageJson;
        const first = searchParams.get("nowBlock") * blockPerPage;
        const last =
          first + blockPerPage <= lastPage ? first + blockPerPage : lastPage;
        for (let i = first; i < last; i++) {
          arr.push(i);
        }
        setPageNum(arr);
      }
    };
    pagingHandle();
    console.log("리로드");
  }, [searchParams, pageJson.lastBlock, pageJson.lastPage]);

  return (
    <div className={style.paging_box}>
      {pageJson && (
        <PagingRemote pageJson={pageJson} searchParams={searchParams}>
          <PagingNum pageNum={pageNum} searchParams={searchParams} />
        </PagingRemote>
      )}
    </div>
  );
};

export default Paging;
