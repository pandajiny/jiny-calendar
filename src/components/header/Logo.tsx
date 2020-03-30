import React from "react";

import { useStyles } from "../../MuiTheme";
import { Box, Typography } from "@material-ui/core";

export function Logo() {
  const classes = useStyles();
  return (
    <div className="header-logo">
      <Box className={classes.columnBox}>
        <Typography>Jiny</Typography>
        <Typography>Calendar</Typography>
      </Box>
    </div>
  );
}
