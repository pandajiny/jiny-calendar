import React from "react";

import { Schedule } from "../../Types";

type ScheduleComponentProps = { schedule: Schedule };
export function ScheduleComponent({ schedule }: ScheduleComponentProps) {
  return (
    <div
      className="calendar-schedule-component"
      key={
        schedule.time.date +
        schedule.time.hour +
        schedule.time.minute +
        schedule.time.second +
        schedule.content.text
      }
    >
      {schedule.content.text}
    </div>
  );
}
