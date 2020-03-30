import React, { useState } from "react";
import { Grid } from "@material-ui/core";

import {
  useDayArray,
  useSelectDateState,
  useMonthArray,
  useSelectDispatch,
  useScheduleState
} from "./CalendarContext";

export function CalendarWidget() {
  // const today = new Date();

  const MonthArray = useMonthArray();

  const selectDate = useSelectDateState();

  console.log(selectDate);

  return (
    <div>
      {MonthArray[selectDate.month] + ", " + selectDate.year}
      <DayList />
      <DateList year={2020} month={2} />
    </div>
  );
}

function DayList() {
  const DayArray = useDayArray();
  const Schedule = useScheduleState();

  // const CountSchedule: number[] = () => {

  // };

  return (
    <div className="calendar-widget-daylist">
      <Grid container>
        {DayArray.map(day => (
          <Grid item md>
            {day}
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

type DateListProps = {
  year: number;
  month: number;
};

function DateList({ year, month }: DateListProps) {
  const StartDate = new Date(year, month, 1);
  const LastDate = new Date(year, month + 1, 0);

  let Weeks: number[] = [0, 1, 2, 3, 4, 5];
  let Days: number[] = [0, 1, 2, 3, 4, 5, 6];
  let countedDate: number = 0;

  const countingDate = (week: number, day: number) => {
    if (week === 0 && day === StartDate.getDay()) {
      countedDate = 1;
    } else {
      countedDate = countedDate + 1;
    }

    return countedDate >= 1 && countedDate <= LastDate.getDate()
      ? countedDate
      : undefined;
  };

  return (
    <div className="calendar-widget-date-list">
      {Weeks.map(week => (
        <Grid container justify="center">
          {Days.map(day => (
            <Grid item md>
              <DateButton
                year={year}
                month={month}
                date={countingDate(week, day)}
              />
            </Grid>
          ))}
        </Grid>
      ))}
    </div>
  );
}

type DateButtonProps = {
  year: number;
  month: number;
  date: number | undefined;
};

function DateButton({ year, month, date }: DateButtonProps) {
  const SelectDispatch = useSelectDispatch();

  const handleClick = () => {
    if (date) {
      SelectDispatch({
        type: "SELECT_DATE",
        time: { year: year, month: month, date: date }
      });
    }
  };
  return (
    <div
      className="calendar-widget-date-button"
      onClick={() => {
        handleClick();
      }}
    >
      {date}c : {}
    </div>
  );
}
