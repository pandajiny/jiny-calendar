import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export function SubmitName() {
  const history = useHistory();
  const [name, setName] = useState("");

  // console.log(`submit email page loaded`);
  // console.log(`current LoginRequestState :`);
  // console.log(LoginRequestState);

  // handing action when button is clicked
  const handleClick = () => {
    console.log(`SIGNUP, submit email : Button Clicked ${name}`);
    // LoginRequestDispatch({ type: "SUBMIT_EMAIL", email: email });
    history.push({
      pathname: "/account/signup/submit_email",
      state: { name: name },
    });
  };

  return (
    <div className="account-signup-name">
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          handleClick();
        }}
      >
        submit name
      </button>
    </div>
  );
}
