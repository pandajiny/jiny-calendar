import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

export function SubmitEmail() {
  const history = useHistory();
  let location = useLocation();
  const [email, setEmail] = useState("");

  // console.log(`submit email page loaded`);
  // console.log(`current LoginRequestState :`);
  // console.log(LoginRequestState);

  // handing action when button is clicked
  const handleClick = () => {
    console.log(`SIGNUP, submit email : Button Clicked ${email}`);
    // LoginRequestDispatch({ type: "SUBMIT_EMAIL", email: email });
    history.push("/account/signup/submit_password", {
      ...location.state,
      email: email,
    });
  };

  return (
    <div className="account-signup-email">
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
