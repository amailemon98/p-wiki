import { createContext, useContext, useRef } from "react";

const SearchIdContext = createContext();

const SearchIdProvider = ({ children }) => {
  const searchEmail = [
    {
      id: "userName",
      name: "이름",
      type: "text",
      userRef: useRef(),
    },
    {
      id: "userEmail",
      name: "이메일",
      type: "text",
      userRef: useRef(),
    },
  ];
  const searchPhone = [
    {
      id: "userName",
      name: "이름",
      type: "text",
      userRef: useRef(),
    },
    {
      id: "userPhone",
      name: "휴대전화번호",
      type: "text",
      userRef: useRef(),
    },
  ];
  return (
    <SearchIdContext.Provider value={{ searchEmail, searchPhone }}>
      {children}
    </SearchIdContext.Provider>
  );
};

const useSearchId = () => useContext(SearchIdContext);

export { SearchIdProvider, useSearchId };
