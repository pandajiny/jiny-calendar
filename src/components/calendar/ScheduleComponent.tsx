import React from "react";

import { Schedule } from "../../Types";

type ScheduleComponentProps = { schedule: Schedule };
export function ScheduleComponent({ schedule }: ScheduleComponentProps) {
  return (
    <div className="calendar-schedule-component">{schedule.content.body}</div>
  );
}
