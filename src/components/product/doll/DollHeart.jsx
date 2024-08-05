import React, { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";

const DollHeart = () => {
  const [like, setLike] = useState(false);
  return (
    <div
      className="heart"
      onClick={() => setLike(!like)}
      style={like ? { color: "#f00000" } : { color: "#aaa" }}
    >
      {like ? <IoMdHeart /> : <IoMdHeartEmpty />}
    </div>
  );
};

export default DollHeart;
