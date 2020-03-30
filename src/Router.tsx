import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Calendar } from "./components/calendar/Calendar";
import Error from "./components/Error";

function Router() {
  return (
    <div className="router">
      <Switch>
        <Route path="/" exact render={() => <Redirect to="/calendar" />} />
        <Route path="/calendar" render={() => <Calendar />} />
        <Route render={() => <Error errorName="ERROR_404" />} />
      </Switch>
    </div>
  );
}

export default Router;
