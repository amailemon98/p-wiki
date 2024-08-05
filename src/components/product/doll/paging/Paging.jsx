import React, { useEffect, useState } from "react";
import PagingNum from "./PagingNum";
import PagingRemote from "./PagingRemote";
import style from "../../../../assets/style/product/Paging.module.css";
import { useProduct } from "../../../../contexts/ProductContext";
import pageJson from "../../../../api/pageData.json";
const Paging = () => {
  const [pageData, setPageData] = useState(pageJson);
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
      if (pageData) {
        const { blockPerPage, lastPage } = pageData;
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
  }, [pageData, searchParams]);

  return (
    <div className={style.paging_box}>
      {pageData && (
        <PagingRemote
          lastBlock={pageData?.lastBlock}
          searchParams={searchParams}
        >
          <PagingNum pageNum={pageNum} searchParams={searchParams} />
        </PagingRemote>
      )}
    </div>
  );
};

export default Paging;
