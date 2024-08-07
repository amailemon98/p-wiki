import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useProduct } from "../../../../contexts/ProductContext";

const PagingNumItem = ({ num }) => {
  const { useAuth, searchParams } = useProduct();
  const [url, setUrl] = useState(useAuth(num));
  return <Link to={url}>{num + 1}</Link>;
};

export default PagingNumItem;
