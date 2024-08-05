import React, { useState } from "react";
import { motion } from "framer-motion";
const SubImageItem = ({ path, setImgPath }) => {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      className="sub"
      style={{
        backgroundImage: path,
      }}
      animate={
        hover ? { border: "2px solid #bbb" } : { border: "2px solid #fff" }
      }
      onMouseOver={() => {
        setHover(true);
        setImgPath(path);
      }}
      onMouseOut={() => setHover(false)}
    ></motion.div>
  );
};

export default SubImageItem;
