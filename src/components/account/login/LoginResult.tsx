import React from "react";

import { useLoginState } from "./LoginContext";
import { getUserState } from "../AccountContext";

import { User } from "../../../Types";

type ResultType = "PASSED" | "FAILED" | "LOADING";

export function LoginResult() {
  console.log(`LoginResult : Page Loaded`);
  console.log(getUserState());
  if (getUserState().isLoggedIn === "TRUE") {
    return <div>{getUserState().email}</div>;
  } else if (getUserState().isLoggedIn === "FALSE") {
    return <div>fail</div>;
  }
  return <div>RESULT now on Loading</div>;
}
