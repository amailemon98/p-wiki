import React, { useState } from "react";
import Description from "./Description";
import Review from "./Review";

const DollDetailSub = () => {
  const [isReview, setIsReivw] = useState(false);
  return (
    <div>
      <div>
        <div>상품 상세정보</div>
        <div>상품 리뷰</div>
      </div>
      {isReview ? <Review /> : <Description />}
    </div>
  );
};

export default DollDetailSub;
