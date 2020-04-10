import React, { useEffect } from "react";

import { Switch, Route, useHistory, useLocation } from "react-router-dom";

import { getUserState } from "../../../functions";

import { SubmitName } from "./SubmitName";
import { SubmitEmail } from "./SubmitEmail";
import { SubmitPassword } from "./SubmitPassword";
import { SignupResult } from "./Result";
import { Welcome } from "./Welcome";
import { Error } from "../../Error";

export function Signup() {
  const history = useHistory();
  const location = useLocation();
  useEffect(() => {
    console.log("Signup Did Mount or Updated");
    if (location.pathname === "/account/signup") {
      if (getUserState().email) {
        history.push({ pathname: "/account/signup/result" });
      } else {
        history.push({ pathname: "/account/signup/submit_name" });
      }
    }
  });
  return (
    <div className="account-signup">
      <button
        onClick={() => {
          history.push("/account/signup/submit_email");
        }}
      >
        GO EMAIL
      </button>
      <button
        onClick={() => {
          history.push("/account/signup/submit_password");
        }}
      >
        GO password
      </button>
      <Switch>
        <Route
          path="/account/signup/submit_name"
          render={() => <SubmitName />}
        />
        <Route
          path="/account/signup/submit_email"
          render={() => <SubmitEmail />}
        />
        <Route
          path="/account/signup/submit_password"
          render={() => <SubmitPassword />}
        />
        <Route path="/account/signup/result" render={() => <SignupResult />} />
        <Route path="/account/signup/welcome" render={() => <Welcome />} />
        <Route render={() => <Error errorName="ERROR_404" />} />
      </Switch>
    </div>
  );
}
