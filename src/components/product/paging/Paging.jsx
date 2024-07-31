import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import PagingNum from "./PagingNum";
import PagingRemote from "./PagingRemote";
import style from "../../../assets/style/product/Paging.module.css";

const Paging = () => {
  const [pageData, setPageData] = useState();
  const [pageNum, setPageNum] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    async function getPageData() {
      try {
        const res = await fetch(`/api/pageData`);
        const jsonData = await res.json();
        if (jsonData) {
          setPageData(jsonData);
        }
      } catch (err) {
        console.log(err);
      }
    }
    getPageData();
  }, []);

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
  }, [searchParams]);

  console.log(searchParams.get("nowPage"), searchParams.get("nowBlock"));
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
