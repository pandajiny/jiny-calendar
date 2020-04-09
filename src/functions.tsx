import React from "react";
import { Redirect, useHistory } from "react-router-dom";

// function for Gettig current Time Object
type Time = {
  year: number;
  month: number;
  date: number;
  hour: number;
  minute: number;
  second: number;
};

export function getCurrentTime(): Time {
  const current = new Date();
  return {
    date: current.getDate(),
    hour: current.getHours(),
    year: current.getFullYear(),
    month: current.getMonth(),
    minute: current.getMinutes(),
    second: current.getSeconds(),
  };
}

type UserState = {
  name: string | null;
  email: string | null;
};

// Checking Login State ? children : Return Nothing
export function getUserState(): UserState {
  // return <div>{getLoginState() ? children : <div>dd</div>}</div>;
  return {
    name: localStorage.getItem("name"),
    email: localStorage.getItem("email"),
  };
}
