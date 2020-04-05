import React, { ReactNode } from "react";

import {
  Route,
  Switch,
  useLocation,
  useHistory,
  Redirect
} from "react-router-dom";
import { Link, Box } from "@material-ui/core";

import { Error } from "../Error";
import { useStyles } from "../../MuiTheme";

export function Account() {
  let location = useLocation();
  const history = useHistory();

  const getLoginState = () => {
    return false;
  };

  return (
    <div className="account">
      Account
      <Switch>
        <Route path="/account/login" render={() => <AccountLogin />} />
        <Route
          path="/account/"
          exact
          render={() =>
            getLoginState() ? <AccountMenu /> : <Redirect to="/account/login" />
          }
        />
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
        <Link>Logout</Link>
        <Link>Logout</Link>
      </Box>
    </div>
  );
}

export function AccountLogin() {
  return <div>Login</div>;
}
