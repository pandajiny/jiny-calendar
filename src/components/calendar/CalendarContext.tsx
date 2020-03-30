import React, { createContext, useContext, Dispatch, useReducer } from "react";
import { create } from "domain";

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

type ScheduleStateProps = Schedule[];

const ScheduleArrayContext = createContext<ScheduleStateProps | undefined>(
  undefined
);

type ScheduleAction =
  | { type: "CREATE_SCHEDULE"; newSchedule: Schedule }
  | { type: "REMOVE_SCHEDULE"; _id: String }
  | { type: "UPDATE_SCHEDULE"; newSchedule: Schedule };
type ScheduleDispatch = Dispatch<ScheduleAction>;

const ScheduleDispatchContext = createContext<ScheduleDispatch | undefined>(
  undefined
);

function ScheduleReducer(state: ScheduleStateProps, action: ScheduleAction) {
  switch (action.type) {
    case "CREATE_SCHEDULE":
      const newState = state.concat(action.newSchedule);
      return newState;
    default:
      throw new Error("unhandled Error from Schedule Reducer");
  }
}

// Day Array Context
type DayArrayProps = string[];

const DayArray = createContext<DayArrayProps | undefined>(undefined);

// Month Array Context

type MonthArrayProps = string[];

const MonthArray = createContext<MonthArrayProps | undefined>(undefined);

// Selecting Date Reducer Context

type SelectAction = {
  type: "SELECT_DATE";
  time: { year: number; month: number; date: number };
};

type SelectDispatch = Dispatch<SelectAction>;

type SelectState = {
  year: number;
  month: number;
  date: number;
};

const SelectDateState = createContext<SelectState | undefined>(undefined);

const SelectDispatchContext = createContext<SelectDispatch | undefined>(
  undefined
);

function SelectReducer(state: SelectState, action: SelectAction) {
  switch (action.type) {
    case "SELECT_DATE":
      return action.time;
    default:
      throw new Error("UNHANDLED ACTION TYPE");
  }
}

export function CalendarContextProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const today = new Date();
  const DayArrayState = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const MonthArrayState = [
    "January",
    "Febrary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const [selectState, selectDispatch] = useReducer(SelectReducer, {
    year: today.getFullYear(),
    month: today.getMonth(),
    date: today.getDate()
  });

  const initialScheduleArray = [] as ScheduleStateProps;

  const [scheduleState, scheduleDispatch] = useReducer(
    ScheduleReducer,
    initialScheduleArray
  );

  return (
    <DayArray.Provider value={DayArrayState}>
      <MonthArray.Provider value={MonthArrayState}>
        <SelectDateState.Provider value={selectState}>
          <SelectDispatchContext.Provider value={selectDispatch}>
            <ScheduleArrayContext.Provider value={scheduleState}>
              <ScheduleDispatchContext.Provider value={scheduleDispatch}>
                {children}
              </ScheduleDispatchContext.Provider>
            </ScheduleArrayContext.Provider>
          </SelectDispatchContext.Provider>
        </SelectDateState.Provider>
      </MonthArray.Provider>
    </DayArray.Provider>
  );
}

export function useDayArray() {
  const state = useContext(DayArray);
  if (!state) throw new Error("DayArrayProvider is not found");
  return state;
}

export function useMonthArray() {
  const state = useContext(MonthArray);
  if (!state) throw new Error("MonthArrayProvider is not found");
  return state;
}

export function useSelectDateState() {
  const state = useContext(SelectDateState);
  if (!state) throw new Error("Select Provider is not found");
  return state;
}

export function useSelectDispatch() {
  const state = useContext(SelectDispatchContext);
  if (!state) throw new Error("SelectProvider is not found");
  return state;
}

export function useScheduleState() {
  const state = useContext(ScheduleArrayContext);
  if (!state) throw new Error("Schedule Provider is not found");
  return state;
}

export function useScheduleDispatch() {
  const state = useContext(ScheduleDispatchContext);
  if (!state) throw new Error("Schedule Provider is not found");
  return state;
}

export function getCurrentTime(): Time {
  const current = new Date();
  return {
    date: current.getDate(),
    hour: current.getHours(),
    year: current.getFullYear(),
    month: current.getMonth(),
    minute: current.getMinutes(),
    second: current.getSeconds()
  };
}
