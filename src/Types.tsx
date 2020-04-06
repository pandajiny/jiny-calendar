export type User = {
  name: string;
  email: string;
  password: string;
  isLoggedIn: LoginState;
};

export type LoginState = "TRUE" | "FALSE" | undefined;

// Schedule Context
export type Schedule = {
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
