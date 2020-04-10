import React from "react";

import { useLocation, useHistory } from "react-router-dom";

import { Error } from "../../Error";

type LocationState =
  | null
  | undefined
  | {
      name?: string;
      email?: string;
    };

export function Welcome() {
  let location = useLocation();
  const history = useHistory();

  if (!location.state) {
    history.push({ pathname: "/account/signup/submit_email" });
  }

  const state: LocationState = location.state;

  if (state?.email && state.name) {
    return (
      <div>
        <h2>Welcome :{state.name} </h2>
        {state.email}
      </div>
    );
  } else {
    return <Error errorName="UNKNOWN" />;
  }
}
