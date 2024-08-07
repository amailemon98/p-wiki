import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import style from "../../../../assets/style/product/doll/Paging.module.css";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const PagingRemote = ({ children, pageJson, searchParams }) => {
  const nevigate = useNavigate();
  return (
    <Fragment>
      {
        <div className={style.prev}>
          {searchParams.get("nowBlock") > 0 && (
            <GrFormPrevious
              onClick={() => {
                if (searchParams.get("q")) {
                  nevigate(
                    `/product/doll?q=${searchParams.get(
                      "q"
                    )}&nowPage=${searchParams.get("nowPage")}&nowBlock=${
                      searchParams.get("nowBlock") - 1
                    }`
                  );
                } else {
                  nevigate(
                    `/product/doll?nowPage=${searchParams.get(
                      "nowPage"
                    )}&nowBlock=${searchParams.get("nowBlock") - 1}`
                  );
                }
              }}
            />
          )}
        </div>
      }
      {children}
      {
        <div className={style.next}>
          {+searchParams.get("nowBlock") + 1 <
            pageJson.lastPage / pageJson.blockPerPage && (
            <GrFormNext
              onClick={() => {
                if (searchParams.get("q")) {
                  nevigate(
                    `/product/doll?q=${searchParams.get(
                      "q"
                    )}&nowPage=${searchParams.get("nowPage")}&nowBlock=${
                      +searchParams.get("nowBlock") + 1
                    }`
                  );
                } else {
                  nevigate(
                    `/product/doll?nowPage=${searchParams.get(
                      "nowPage"
                    )}&nowBlock=${+searchParams.get("nowBlock") + 1}`
                  );
                }
              }}
            />
          )}
        </div>
      }
    </Fragment>
  );
};

export default PagingRemote;
