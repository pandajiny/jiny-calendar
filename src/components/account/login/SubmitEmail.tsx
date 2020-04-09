import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export function SubmitEmail() {
  const history = useHistory();
  const [email, setEmail] = useState("");

  // console.log(`submit email page loaded`);
  // console.log(`current LoginRequestState :`);
  // console.log(LoginRequestState);

  // handing action when button is clicked
  const handleClick = () => {
    console.log(`submit email : Button Clicked ${email}`);
    // LoginRequestDispatch({ type: "SUBMIT_EMAIL", email: email });
    history.push({
      pathname: "/account/login/submit_password",
      state: { email: email },
    });
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
