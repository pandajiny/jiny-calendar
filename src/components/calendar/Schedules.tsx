import React from "react";

import { ScheduleAdd } from "./ScheduleAdd";
import {
  useScheduleState,
  useSelectDateState,
  useMonthArray
} from "./CalendarContext";

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
  const ScheduleArray = useScheduleState();
  return (
    <div className="calendar-schedule-list">
      {ScheduleArray.map(schedule => {
        return schedule.content.text;
      })}
    </div>
  );
}
