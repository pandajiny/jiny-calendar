import React from "react";

import { ScheduleAdd } from "./ScheduleAdd";
import {
  useScheduleState,
  useSelectDateState,
  useMonthArray
} from "./CalendarContext";
import { ScheduleComponent } from "./ScheduleComponent";
import { Box } from "@material-ui/core";

import { useStyles } from "../../MuiTheme";

export function Schedules() {
  const selectDate = useSelectDateState();
  const monthArray = useMonthArray();
  return (
    <div>
      {monthArray[selectDate.month] + ", " + selectDate.date}
      <ScheduleAdd />
      <ScheduleList />
    </div>
  );
}

function ScheduleList() {
  const classes = useStyles();
  const selectDate = useSelectDateState();
  const ScheduleArray = useScheduleState().filter(schedule => {
    if (schedule.time.year === selectDate.year) {
      if (schedule.time.month === selectDate.month) {
        if (schedule.time.date === selectDate.date) {
          return true;
        }
      }
    }
    return false;
  });
  return (
    <div className="calendar-schedule-list">
      <Box className={classes.columnBox}>
        {ScheduleArray.map((schedule, index) => {
          return <ScheduleComponent schedule={schedule} key={index} />;
        })}
      </Box>
    </div>
  );
}
