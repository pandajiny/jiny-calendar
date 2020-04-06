import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import { LoginContextProvider } from "./LoginContext";
import { LoginEmail } from "./LoginEmail";
import { LoginPassword } from "./LoginPassword";
import { LoginResult } from "./LoginResult";
import { Error } from "../../Error";

export function Login() {
  const history = useHistory();
  return (
    <div className="account-login">
      <LoginContextProvider>
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
            render={() => <LoginEmail />}
          />
          <Route
            path="/account/login/submit_password"
            render={() => <LoginPassword />}
          />
          <Route path="/account/login/result" render={() => <LoginResult />} />
          <Route render={() => <Error errorName="ERROR_404" />} />
        </Switch>
      </LoginContextProvider>
    </div>
  );
}
