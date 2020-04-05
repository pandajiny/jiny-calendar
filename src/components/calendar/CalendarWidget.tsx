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

  return (
    <div>
      {MonthArray[selectDate.month] + ", " + selectDate.year}
      <DayList />
      <DateList year={selectDate.year} month={selectDate.month} />
    </div>
  );
}

function DayList() {
  const DayArray = useDayArray();

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
  // create Date obj
  const StartDate = new Date(year, month, 1);
  const LastDate = new Date(year, month + 1, 0);
  const Schedule = useScheduleState();

  const monthSchedule = Schedule.filter(
    schedule => schedule.time.month === month
  ).sort((a, b) => a.time.date - b.time.date);
  console.log(`current month Schedule : `);
  console.log(monthSchedule);

  let Weeks: number[] = [0, 1, 2, 3, 4, 5];
  let Days: number[] = [0, 1, 2, 3, 4, 5, 6];
  let countedDate: number = 0;

  const ScheduleCounter = (date: number): number => {
    return Schedule.filter(schedule => schedule.time.date === date).length;
  };

  const countingDate = (week: number, day: number, value: number) => {
    if (week === 0 && day === StartDate.getDay()) {
      countedDate = 1;
    } else if (countedDate > 0) {
      countedDate = countedDate + value;
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
                date={countingDate(week, day, 1)}
                scheduleCount={ScheduleCounter(
                  countingDate(week, day, 0) || 32
                )}
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
  scheduleCount: number;
};

function DateButton({ year, month, date, scheduleCount }: DateButtonProps) {
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
      {date}c : {scheduleCount}
    </div>
  );
}
