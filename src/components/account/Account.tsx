import React, { ReactNode } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { Link, Box } from "@material-ui/core";

// import component
import { Error } from "../Error";
import { useStyles } from "../../MuiTheme";
import { getUserState } from "./AccountContext";
import { Login } from "./login/Login";

import { CheckLoginState } from "../../functions";

export function Account() {
  return (
    <div className="account">
      Account
      <Switch>
        <Route path="/account/login" render={() => <Login />} />
        {CheckLoginState() && (
          <Route path="/account/" exact render={() => <AccountMenu />} />
        )}
        <Route render={() => <Error errorName={"ERROR_404"} />} />
      </Switch>
    </div>
  );
}

// function LoginRequired({ children }: { children: React.ReactNode }) {
//   return (
//     <div>
//       {getUserState().isLoggedIn ? children : <Redirect to="/account/login" />}
//     </div>
//   );
// }

export function AccountMenu() {
  const classes = useStyles();
  return (
    <div className="account-menu">
      <Box className={classes.columnBox}>
        <Link>Profile</Link>
        <Link>Logout</Link>
      </Box>
    </div>
  );
}

export function AccountLogin(): boolean {
  if (getUserState().isLoggedIn) {
    return true;
  } else {
    return false;
  }
}
