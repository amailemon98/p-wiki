import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import style from "../../../../assets/style/product/Paging.module.css";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const PagingRemote = ({ children, lastBlock, searchParams }) => {
  const nevigate = useNavigate();

  return (
    <Fragment>
      {
        <div className={style.prev}>
          {searchParams.get("nowBlock") > 0 && (
            <GrFormPrevious
              onClick={() => {
                nevigate(
                  `/product/doll?nowPage=${searchParams.get(
                    "nowPage"
                  )}&nowBlock=${+searchParams.get("nowBlock") - 1}`
                );
              }}
            />
          )}
        </div>
      }
      {children}
      {
        <div className={style.next}>
          {searchParams.get("nowBlock") < lastBlock && (
            <GrFormNext
              onClick={() => {
                nevigate(
                  `/product/doll?nowPage=${searchParams.get(
                    "nowPage"
                  )}&nowBlock=${+searchParams.get("nowBlock") + 1}`
                );
              }}
            />
          )}
        </div>
      }
    </Fragment>
  );
};

export default PagingRemote;
