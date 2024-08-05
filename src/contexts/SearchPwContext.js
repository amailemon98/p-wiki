import { createContext, useContext, useRef } from "react";

const SearchPwContext = createContext();

const SearchPwProvider = ({ children }) => {
  const searchEmail = [
    {
      id: "userId",
      name: "아이디",
      type: "text",
      userRef: useRef(),
    },
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
      id: "userId",
      name: "아이디",
      type: "text",
      userRef: useRef(),
    },
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
    <SearchPwContext.Provider value={{ searchEmail, searchPhone }}>
      {children}
    </SearchPwContext.Provider>
  );
};

const useSearchPw = () => useContext(SearchPwContext);

export { SearchPwProvider, useSearchPw };
