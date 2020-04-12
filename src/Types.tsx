export type User = {
  name: string;
  email: string;
  password: string;
  isLoggedIn: LoginState;
};

export type LoginState = "TRUE" | "FALSE" | undefined;

// Schedule Context
export type Schedule = {
  time: ScheduleTime;
  content: Content;
  user: requestUser;
};

export type ScheduleTime = {
  year: number;
  month: number;
  date: number;
};

type requestUser = {
  email: string;
  name: string;
};

type Content = { body: String };

type ContentType = "Schedule" | "undefined";

export type Time = {
  year: number;
  month: number;
  date: number;
  hour: number;
  minute: number;
  second: number;
};

export type SaveCookieProps = {
  name: string;
  email: string;
  isLoggedIn: "TRUE" | "FALSE";
  loginTime: Time;
};
