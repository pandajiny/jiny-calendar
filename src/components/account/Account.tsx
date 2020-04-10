import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";

import { Link, Box } from "@material-ui/core";

// import component
import { UserRequire } from "./UserRequire";
import { Login } from "./login/Login";
import { Signup } from "./signup/Signup";
import { Logout } from "./Logout";
import { Error } from "../Error";

import { getUserState } from "../../functions";
import { useStyles } from "../../MuiTheme";

export function Account() {
  const history = useHistory();
  useEffect(() => {
    if (!getUserState().name) {
      history.push({ pathname: "/account/user" });
    }
  }, [history]);
  return (
    <div className="account">
      Account
      <Switch>
        <Route path="/account/user" render={() => <UserRequire />} />
        <Route path="/account/login" render={() => <Login />} />
        <Route path="/account/signup" render={() => <Signup />} />
        {getUserState().name && (
          <>
            <Route path="/account/" exact render={() => <AccountMenu />} />
            <Route path="/account/logout" render={() => <Logout />} />
          </>
        )}
        <Route render={() => <Error errorName={"ERROR_404"} />} />
      </Switch>
    </div>
  );
}

export function AccountMenu() {
  const classes = useStyles();
  return (
    <div className="account-menu">
      <Box className={classes.columnBox}>
        <Link>Profile</Link>
        <Link href="/account/logout">Logout</Link>
      </Box>
    </div>
  );
}
