import React, { useContext, useReducer, createContext } from "react";

import { User, LoginState } from "../../Types";

export function AccountContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
