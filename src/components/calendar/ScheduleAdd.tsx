import React, { useState } from "react";

// MUI important
import { TextField, Button } from "@material-ui/core";

// context import
import {
  useScheduleDispatch,
  getCurrentTime,
  useSelectDateState,
} from "./CalendarContext";

// apollo import
import { useMutation } from "react-apollo";
import { CREATE_SCHEDULE, CREATE_SCHEDULE_PROPS } from "../../apollo";

// util important
import { getUserState } from "../../functions";

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

  const [createSchedule, { data }] = useMutation(CREATE_SCHEDULE, {
    onCompleted: (result) => {
      console.log(result);
    },
  });

  const handleSubmit = () => {
    console.log(`SchduleAdd, Schedule Add Button clicked!`);
    scheduleDispatch({
      type: "CREATE_SCHEDULE",
      newSchedule: {
        // requestTime: getCurrentTime(),
        time: selectDate,
        user: { email: "astic1764@gmail.com", name: "JINY" },
        content: { body: text },
      },
    });
    // below, apollo code
    const CreateScheduleVariables: CREATE_SCHEDULE_PROPS = {
      content: { body: text },
      time: {
        year: selectDate.year,
        month: selectDate.month,
        date: selectDate.date,
      },
      user: {
        name: getUserState().name || "",
        email: getUserState().email || "",
      },
    };
    createSchedule({ variables: CreateScheduleVariables });
    setText("");
  };

  return (
    <div className="calendar-schedule-add-form">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <TextField
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <Button type="submit">Adding</Button>
      </form>
    </div>
  );
}
