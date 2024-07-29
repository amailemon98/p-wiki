import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import PagingNum from "./PagingNum";
import PagingRemote from "./PagingRemote";

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
  console.log(pageNum);
  return (
    <div className="paging_box">
      {pageData && (
        <PagingRemote lastBlock={pageData?.lastBlock}>
          <PagingNum pageNum={pageNum} />
        </PagingRemote>
      )}
    </div>
  );
};

export default Paging;
