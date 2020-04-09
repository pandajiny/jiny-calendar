import React from "react";

import { getUserState } from "../../functions";

export function UserState() {
  return <div>{getUserState().name}</div>;
}
