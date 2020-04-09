import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";

// import Component
import { SubmitEmail } from "./SubmitEmail";
import { SubmitPassword } from "./SubmitPassword";
import { LoginResult } from "./Result";
import { Error } from "../../Error";

export function Login() {
  const history = useHistory();
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
        <Route render={() => <Error errorName="ERROR_404" />} />
      </Switch>
    </div>
  );
}
