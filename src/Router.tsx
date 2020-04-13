import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// import component
import { Calendar } from "./components/calendar/Calendar";
import { Account } from "./components/account/Account";
import { Diary } from "./components/diary/Diary";
import { Error } from "./components/Error";

import { getUserState } from "./functions";

export function Router() {
  return (
    <div className="router">
      <Switch>
        <Route path="/" exact render={() => <Redirect to="/calendar" />} />
        <Route path="/account" render={() => <Account />} />
        {getUserState().name && (
          //  Below Here, You need to Login.
          <>
            <Route path="/calendar" render={() => <Calendar />} />
            <Route path="/diary" render={() => <Diary />} />
          </>
        )}
        <Route render={() => <Error errorName="ERROR_404" />} />
      </Switch>
    </div>
  );
}
