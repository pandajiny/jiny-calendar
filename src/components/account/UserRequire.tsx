import React from "react";

import { useHistory } from "react-router-dom";

export function UserRequire() {
  const history = useHistory();
  return (
    <div>
      <button
        onClick={() => {
          history.push({ pathname: "/account/login" });
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          history.push({ pathname: "/account/signup" });
        }}
      >
        SignUp
      </button>
    </div>
  );
}
