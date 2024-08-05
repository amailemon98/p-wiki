import React from "react";
import { Link } from "react-router-dom";

const SubMenuItem = ({ subMenu }) => {
  return (
    <li>
      <Link to={subMenu.path}>{subMenu.name}</Link>
    </li>
  );
};

export default SubMenuItem;
