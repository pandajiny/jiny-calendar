import React from "react";
import { Grid } from "@material-ui/core";

import { CalendarContextProvider } from "./CalendarContext";
import { CalendarWidget } from "./CalendarWidget";
import { Schedules } from "./Schedules";
import { useStyles } from "../../MuiTheme";

export function Calendar() {
  const classes = useStyles();
  return (
    <div className="calendar">
      <CalendarContextProvider>
        Calendar
        <div className={classes.flexRoot}>
          <Grid container>
            <Grid item md={6}>
              <CalendarWidget />
            </Grid>
            <Grid item md={6}>
              <Schedules />
            </Grid>
          </Grid>
        </div>
      </CalendarContextProvider>
    </div>
  );
}
