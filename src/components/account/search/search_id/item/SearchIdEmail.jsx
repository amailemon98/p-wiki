import React from "react";
import { useSearchId } from "../../../../../contexts/SearchIdContext";
import AccountItem from "../../../AccountItem";

const SearchIdEmail = () => {
  const { searchEmail } = useSearchId();
  return (
    <div>
      {searchEmail.map((user) => (
        <AccountItem user={user} />
      ))}
    </div>
  );
};

export default SearchIdEmail;