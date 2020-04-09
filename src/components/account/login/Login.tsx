import React, { useEffect } from "react";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";

// import Component
import { SubmitEmail } from "./SubmitEmail";
import { SubmitPassword } from "./SubmitPassword";
import { LoginResult } from "./Result";
import { Welcome } from "./Welcome";
import { Error } from "../../Error";

import { getUserState } from "../../../functions";

export function Login() {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/account/login/") {
      if (getUserState().email) {
        history.push({ pathname: "/account/login/result" });
      } else {
        history.push({ pathname: "/account/login/submit_email" });
      }
    }
  });

  return (
    <div className="account-login">
      <button
        onClick={() => {
          history.push("/account/login/submit_email");
        }}
      >
        GO EMAIL
      </button>
      <button
        onClick={() => {
          history.push("/account/login/submit_password");
        }}
      >
        GO password
      </button>
      <Switch>
        <Route
          path="/account/login/submit_email"
          render={() => <SubmitEmail />}
        />
        <Route
          path="/account/login/submit_password"
          render={() => <SubmitPassword />}
        />
        <Route path="/account/login/result" render={() => <LoginResult />} />
        <Route path="/account/login/welcome" render={() => <Welcome />} />
        <Route render={() => <Error errorName="ERROR_404" />} />
      </Switch>
    </div>
  );
}
