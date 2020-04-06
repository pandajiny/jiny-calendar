import React from "react";
import { getUserState } from "../account/AccountContext";

export function UserState() {
  return <div>{getUserState().email}</div>;
}
