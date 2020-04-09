import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

export function SubmitPassword() {
  // Set State for Password TextField
  const [password, setPassword] = useState("");

  const history = useHistory();
  let location = useLocation();

  console.log(`submit password is loaded`);

  // Handling Action when Button Clicked
  const handleClick = () => {
    console.log(`submit password: button Clicked`);
    // LoginDispatch({ type: "SUBMIT_PASS", password: password });
    history.push("/account/login/result", {
      ...location.state,
      password: password,
    });
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
