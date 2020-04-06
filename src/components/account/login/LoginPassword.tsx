import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { useLoginDispatch } from "./LoginContext";

export function LoginPassword() {
  const LoginDispatch = useLoginDispatch();
  const history = useHistory();

  const [password, setPassword] = useState("");

  const handleClick = () => {
    console.log(`loginPassword: button Clicked`);
    LoginDispatch({ type: "SUBMIT_PASS", password: password });
    LoginDispatch({ type: "TRY_LOGIN" });
    history.push({ pathname: "/account/login/result" });
  };

  return (
    <div className="account-login-password">
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
      <button
        onClick={() => {
          handleClick();
        }}
      >
        submit pass
      </button>
    </div>
  );
}
