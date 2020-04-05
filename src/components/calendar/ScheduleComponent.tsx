import React from "react";

// Schedule Context
type Schedule = {
  _id?: string;
  requestTime: Time;
  time: Time;
  content: Content;
  user: requestUser;
};

type requestUser = {
  email: string;
  name: string;
};

type Content = {
  text: string;
  isImportant: boolean;
  kind: ContentType;
};

type ContentType = "Schedule" | "undefined";

type Time = {
  year: number;
  month: number;
  date: number;
  hour: number;
  minute: number;
  second: number;
};

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
