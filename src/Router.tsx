import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// import component
import { Calendar } from "./components/calendar/Calendar";
import { Account } from "./components/account/Account";
import { Error } from "./components/Error";

import { CheckLoginState } from "./functions";

export function Router() {
  return (
    <div className="router">
      <Switch>
        <Route path="/" exact render={() => <Redirect to="/calendar" />} />
        <Route path="/account" render={() => <Account />} />
        {CheckLoginState() && (
          //  Below Here, You need to Login.
          <Route path="/calendar" render={() => <Calendar />} />
        )}
        <Route render={() => <Error errorName="ERROR_404" />} />
      </Switch>
    </div>
  );
}
