import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Paging = () => {
  const [pageData, setPageData] = useState();
  const nevigate = useNavigate();

  const [isPendding, setIsPendding] = useState();

  const [searchParams, setSearchParams] = useSearchParams();
  const [nowPage, setNowPage] = useState(0);
  const [nowBlock, setNowBlock] = useState(0);

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
  console.log(pageData);
  let arr = [];
  if (pageData) {
    const { pagePerProduct, totalProduct, blockPerPage } = pageData;
    const first = searchParams.get("nowBlock") * blockPerPage;
    const last =
      first + blockPerPage <= Math.ceil(totalProduct / pagePerProduct)
        ? first + blockPerPage
        : Math.ceil(totalProduct / pagePerProduct);
    for (let i = first; i < last; i++) {
      arr.push(i);
    }
  }

  return (
    <div className="paging_box">
      <div>
        <div
          onClick={() => {
            setNowBlock(nowBlock - 1);
            nevigate(`/product/doll?nowPage=${nowPage}&nowBlock=${nowBlock}`);
          }}
        >
          이전
        </div>
      </div>
      <ul>
        {arr.map((item) => (
          <li key={item}>
            <a
              href={`http://localhost:3000/product/doll?nowPage=${item}&nowBlock=${nowBlock}`}
              onClick={() => {
                setNowPage(item);
              }}
            >
              {item + 1}
            </a>
          </li>
        ))}
      </ul>
      <div>
        <div
          onClick={() => {
            setNowBlock(nowBlock + 1);
            nevigate(`/product/doll?nowPage=${nowPage}&nowBlock=${nowBlock}`);
          }}
        >
          다음
        </div>
      </div>
    </div>
  );
};

export default Paging;
