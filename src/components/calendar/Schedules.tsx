import React from "react";

// React Component Import
import { ScheduleAdd } from "./ScheduleAdd";
import { ScheduleComponent } from "./ScheduleComponent";

// Context Import
import {
  useScheduleState,
  useSelectDateState,
  useMonthArray,
  useScheduleDispatch,
} from "./CalendarContext";

// MUI IMport
import { Box } from "@material-ui/core";
import { useStyles } from "../../MuiTheme";

// apollo import
import { useQuery } from "react-apollo";
import { GET_ALL_SCHEDULES } from "../../apollo";

// util function import
import { getUserState } from "../../functions";
import { isArray } from "util";

// Main Function
export function Schedules() {
  const selectDate = useSelectDateState();
  const monthArray = useMonthArray();
  const ScheduleDispatch = useScheduleDispatch();
  // const [dataLoaded, setDataLoaded] = useState(false);

  // Get All Schedules from Back-end
  const { loading, error, data } = useQuery(GET_ALL_SCHEDULES, {
    variables: { email: getUserState().email },
    onCompleted: () => {
      if (error) {
        throw new Error();
      }
      if (data && data.getAllSchedules && isArray(data.getAllSchedules)) {
        // setDataLoaded(true);
        // console.log(data.getAllSchedules);
        const Schedules: [] = data.getAllSchedules;
        Schedules.map((schedule) => {
          ScheduleDispatch({ type: "CREATE_SCHEDULE", newSchedule: schedule });
        });
      }
    },
  });

  return (
    <div>
      {monthArray[selectDate.month] + ", " + selectDate.date}
      <ScheduleAdd />
      <ScheduleList />
      {loading}
    </div>
  );
}

function ScheduleList() {
  const classes = useStyles();
  const selectDate = useSelectDateState();
  console.log("scheduleList : ");
  console.log(useScheduleState());
  const ScheduleArray = useScheduleState().filter((schedule) => {
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
