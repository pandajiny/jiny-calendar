import React, { useContext, useReducer, createContext } from "react";

import { User, LoginState } from "../../Types";

export function getUserState(): User {
  return {
    email: localStorage.getItem("email") || "",
    isLoggedIn:
      localStorage.getItem("isLoggedIn") === "TRUE"
        ? ("TRUE" as LoginState)
        : ("FALSE" as LoginState),
    name: localStorage.getItem("name") || "",
    password: localStorage.getItem("password") || "",
  };
}

export function AccountContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
