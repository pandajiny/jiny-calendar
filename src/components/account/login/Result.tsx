import React, { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

// import apollo module
import { useMutation } from "react-apollo";
import { REQUST_LOGIN } from "../../../apollo";

// for using location.state
// default location.state's type is {} | null | undefined
type LocationState =
  | {
      email?: string;
      password?: string;
    }
  | null
  | undefined;

export function LoginResult() {
  let location = useLocation();
  let history = useHistory();
  // console.log(`loginResult`);

  const state: LocationState = location.state;

  let email: string = "";
  let password: string = "";
  if (state?.email && state.password) {
    email = state.email;
    password = state.password;
  } else {
    history.push({ pathname: "/account/login/submit_email", state: {} });
  }

  const [requestLogin, { error, data }] = useMutation(REQUST_LOGIN, {
    variables: { email: email, password: password },
    onCompleted: (result) => {
      console.log(result);
      const { name, email } = result.requestLogin.user;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      history.push({
        pathname: "/account/login/welcome",
        state: {
          name: name,
          email: email,
        },
      });
    },
  });

  useEffect(() => {
    console.log(`Login Result : `);
    requestLogin();
  });

  return (
    <div className="account-login-result">
      {state?.email} {state?.password}
    </div>
  );
}
