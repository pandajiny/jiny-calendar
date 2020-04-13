import React from "react";
import { Link, Box } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import { useStyles } from "../../MuiTheme";

export function NavBar() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className="header-navbar">
      <Box className={classes.rowBox}>
        <Link
          onClick={() => {
            history.push("/calendar");
          }}
        >
          Calendar
        </Link>
        <Link
          onClick={() => {
            history.push("/diary");
          }}
        >
          Diary
        </Link>
        <Link
          onClick={() => {
            history.push("/account");
          }}
        >
          Account
        </Link>
      </Box>
    </div>
  );
}
