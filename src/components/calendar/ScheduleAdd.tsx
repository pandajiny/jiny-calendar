import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import {
  useScheduleState,
  useScheduleDispatch,
  getCurrentTime,
  useSelectDateState
} from "./CalendarContext";

export function ScheduleAdd() {
  return (
    <div className="calendar-schedule-add">
      <AddForm />
    </div>
  );
}

export function AddForm() {
  const [text, setText] = useState("");

  const scheduleDispatch = useScheduleDispatch();
  const selectDate = useSelectDateState();

  const handleSubmit = () => {
    console.log(`SchduleAdd, Schedule Add Button clicked!`);
    setText("");
    scheduleDispatch({
      type: "CREATE_SCHEDULE",
      newSchedule: {
        requestTime: getCurrentTime(),
        time: selectDate,
        user: { email: "astic1764@gmail.com", name: "JINY" },
        content: { isImportant: false, text: text, kind: "Schedule" }
      }
    });
  };

  return (
    <div className="calendar-schedule-add-form">
      <form
        onSubmit={e => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <TextField
          value={text}
          onChange={e => {
            setText(e.target.value);
          }}
        />
        <Button type="submit">Adding</Button>
      </form>
    </div>
  );
}
