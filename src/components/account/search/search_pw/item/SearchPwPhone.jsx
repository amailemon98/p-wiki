import React from "react";
import AccountItem from "../../../AccountItem";
import { useSearchPw } from "../../../../../contexts/SearchPwContext";

const SearchIdPhone = () => {
  const { searchPhone } = useSearchPw();
  return (
    <div>
      {searchPhone.map((user) => (
        <AccountItem user={user} />
      ))}
    </div>
  );
};

export default SearchIdPhone;
