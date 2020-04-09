import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";

import { Link, Box } from "@material-ui/core";

// import component
import { Error } from "../Error";
import { useStyles } from "../../MuiTheme";
import { Login } from "./login/Login";

import { getUserState } from "../../functions";

export function Account() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();
  useEffect(() => {
    if (!getUserState().name) {
      history.push({ pathname: "/account/login/" });
    }
  }, [history]);
  return (
    <div className="account">
      Account
      <Switch>
        <Route path="/account/login" render={() => <Login />} />
        {getUserState().name && (
          <Route path="/account/" exact render={() => <AccountMenu />} />
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
        <Link>Logout</Link>
      </Box>
    </div>
  );
}
