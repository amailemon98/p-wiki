import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "../../../../assets/style/product/doll/Paging.module.css";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { useProduct } from "../../../../contexts/ProductContext";

const PagingRemote = ({ children, pageJson }) => {
  const navigate = useNavigate();
  const { useAuth, searchParams } = useProduct();
  const [urlNext, setUrlNext] = useState(
    useAuth(undefined, +searchParams.get("nowBlock") + 1)
  );
  const [urlPrev, setUrlPrev] = useState(
    useAuth(undefined, searchParams.get("nowBlock") - 1)
  );
  console.log(searchParams.get("nowPage"));
  return (
    <Fragment>
      {
        <div className={style.prev}>
          {searchParams.get("nowBlock") > 0 && (
            <GrFormPrevious
              onClick={() => {
                navigate(urlPrev);
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
                navigate(urlNext);
              }}
            />
          )}
        </div>
      }
    </Fragment>
  );
};

export default PagingRemote;
