import { createContext, useContext, useRef } from "react";

const RegisterContext = createContext();

const RegisterProvider = ({ children }) => {
  const user01 = [
    { id: "userEmail", name: "이메일", type: "text", userRef: useRef() },
    { id: "userId", name: "아이디", type: "text", userRef: useRef() },
    { id: "userPw", name: "비밀번호", type: "password", userRef: useRef() },
  ];
  const user02 = [
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

  const userBirth = {
    id: "userBirth",
    name: "생년월일",
    type: "text",
    userRef: useRef(),
  };
  const userAddrDetail = {
    id: "userAddrDetail",
    name: "상세 주소",
    type: "text",
    userRef: useRef(),
  };

  return (
    <RegisterContext.Provider
      value={{
        user01,
        user02,
        userBirth,
        userAddrDetail,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

const useRegister = () => useContext(RegisterContext);

export { RegisterProvider, useRegister };
