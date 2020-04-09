import React from "react";
import { useLocation, useHistory } from "react-router-dom";

type LocationState =
  | {
      email?: string;
      password?: string;
    }
  | null
  | undefined;
type ResultType = "PASSED" | "FAILED" | "LOADING";

export function LoginResult() {
  let location = useLocation();
  let history = useHistory();
  // console.log(`loginResult`);

  // if don't have location state, go back to email submit page
  if (!location.state) {
    history.push({ pathname: "/account/login/submit_email" });
  }

  const state: LocationState = location.state;

  return (
    <div className="account-login-result">
      {state?.email} {state?.password}
    </div>
  );
}
