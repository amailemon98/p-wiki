import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const PagingRemote = ({ children, lastBlock }) => {
  const nevigate = useNavigate();
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
  }, [searchParams]);
  return (
    <div>
      <div>
        {searchParams.get("nowBlock") > 0 && (
          <div
            onClick={() => {
              nevigate(
                `/product/doll?nowPage=${searchParams.get(
                  "nowPage"
                )}&nowBlock=${+searchParams.get("nowBlock") - 1}`
              );
            }}
          >
            이전
          </div>
        )}
      </div>
      {children}
      <div>
        {searchParams.get("nowBlock") < lastBlock && (
          <div
            onClick={() => {
              nevigate(
                `/product/doll?nowPage=${searchParams.get(
                  "nowPage"
                )}&nowBlock=${+searchParams.get("nowBlock") + 1}`
              );
            }}
          >
            다음
          </div>
        )}
      </div>
    </div>
  );
};

export default PagingRemote;
