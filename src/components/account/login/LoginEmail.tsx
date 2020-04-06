import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useLoginDispatch } from "./LoginContext";

export function LoginEmail() {
  const LoginDispatch = useLoginDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");

  const handleClick = () => {
    console.log(`loginEmail : Button Clicked ${email}`);
    LoginDispatch({ type: "SUBMIT_EMAIL", email: email });
    history.push({ pathname: "/account/login/submit_password" });
  };

  return (
    <div className="account-login-email">
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <button
        onClick={() => {
          handleClick();
        }}
      >
        submit email
      </button>
    </div>
  );
}
