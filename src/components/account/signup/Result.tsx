import React, { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

// import apollo module
import { useMutation } from "react-apollo";
import { REQUST_SIGNUP } from "../../../apollo";

// for using location.state
// default location.state's type is {} | null | undefined
type LocationState =
  | {
      name?: string;
      email?: string;
      password?: string;
    }
  | null
  | undefined;

export function SignupResult() {
  let location = useLocation();
  let history = useHistory();
  // console.log(`loginResult`);

  const state: LocationState = location.state;

  let name: string = "";
  let email: string = "";
  let password: string = "";
  if (state?.email && state.password && state.name) {
    name = state.name;
    email = state.email;
    password = state.password;
  } else {
    history.push({ pathname: "/account/signup/submit_email", state: {} });
  }

  const [requestSignup, { error, data, loading }] = useMutation(REQUST_SIGNUP, {
    variables: { name: name, email: email, password: password },
    onCompleted: (result) => {
      console.log(result);
      const { name, email } = result.requestSignup.user;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);

      history.push({
        pathname: "/account/singup/welcome",
        state: {
          name: name,
          email: email,
        },
      });
    },
  });
  useEffect(() => {
    console.log(`signUp Result : `);
    if (!loading) requestSignup();
  });

  return <div className="account-login-result">loading data from server</div>;
}
