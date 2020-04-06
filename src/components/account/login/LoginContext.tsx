import React, { useContext, useReducer, createContext, Dispatch } from "react";

// define Login Reducer

// import User Type
import { User, SaveCookieProps, Time, LoginState } from "../../../Types";

// define LoginAction props type
type LoginAction =
  | { type: "SUBMIT_EMAIL"; email: string }
  | { type: "SUBMIT_PASS"; password: string }
  | { type: "TRY_LOGIN" }
  | { type: "TRY_LOGOUT" };

type LoginDispatch = Dispatch<LoginAction>;

const LoginDispatchContext = createContext<LoginDispatch | undefined>(
  undefined
);

const LoginStateContext = createContext<User | undefined>(undefined);

// Example User data. it will replaced after Back-end dev' finish.
const UserData: User = {
  name: "JINY KIM",
  email: "astic1764@gmail.com",
  password: "1234",
  isLoggedIn: undefined,
};

function LoginReducer(state: User, action: LoginAction) {
  switch (action.type) {
    case "SUBMIT_EMAIL":
      console.log(`loginContext : SUBMIT_EMAIL : ${action.email}`);
      return {
        name: state.name,
        email: action.email,
        password: state.password,
        isLoggedIn: state.isLoggedIn,
      };
    case "SUBMIT_PASS":
      console.log(`loginContext : SUBMIT_PASS : ${action.password}`);
      return {
        name: state.name,
        email: state.email,
        password: action.password,
        isLoggedIn: state.isLoggedIn,
      };
    case "TRY_LOGIN":
      //   when back-end done, it will be updated.
      console.log(`loginContext : TRY_LOGIN`);
      // if Requested Date is same as DB's data, return 'isLoggedIn' as true.
      if (JSON.stringify(UserData) === JSON.stringify(state)) {
        console.log(`loginPassed :`);
        console.log(state);
        saveCookie({
          name: state.name,
          email: state.email,
          isLoggedIn: "TRUE",
          loginTime: getCurrentTime(),
        });
        return {
          name: state.name,
          email: state.email,
          password: state.password,
          isLoggedIn: "TRUE" as LoginState,
        };
      } else {
        // when failed
        console.log(`loginFailed :`);
        console.log(state);
        saveCookie({
          name: state.name,
          email: state.email,
          isLoggedIn: "FALSE",
          loginTime: getCurrentTime(),
        });
        return {
          name: state.name,
          email: state.email,
          password: state.password,
          isLoggedIn: "FALSE" as LoginState,
        };
      }
    case "TRY_LOGOUT":
      saveCookie({
        name: "",
        email: "",
        isLoggedIn: "FALSE",
        loginTime: getCurrentTime(),
      });
      return {
        name: "JINY KIM",
        email: "",
        password: "",
        isLoggedIn: undefined,
      };
    default:
      throw new Error("unhandled action type");
  }
}

export function LoginContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const initUser: User = {
    name: "JINY KIM",
    email: "",
    password: "",
    isLoggedIn: undefined,
  };
  const [LoginState, LoginDispatch] = useReducer(LoginReducer, initUser);

  return (
    <LoginDispatchContext.Provider value={LoginDispatch}>
      <LoginStateContext.Provider value={LoginState}>
        {children}
      </LoginStateContext.Provider>
    </LoginDispatchContext.Provider>
  );
}

export function useLoginState() {
  const state = useContext(LoginStateContext);
  if (!state) throw new Error("Login Provider is not found");
  return state;
}

export function useLoginDispatch() {
  const state = useContext(LoginDispatchContext);
  if (!state) throw new Error("Login Provider is not found");
  return state;
}

function saveCookie({ name, email, isLoggedIn, loginTime }: SaveCookieProps) {
  console.log("loginContext : Saving Cookie");
  localStorage.setItem("name", name);
  localStorage.setItem("isLoggedIn", isLoggedIn);
  localStorage.setItem("email", email);
  localStorage.setItem("password", "encrypted");
  console.log(loginTime);
}

export function getCurrentTime(): Time {
  const current = new Date();
  return {
    date: current.getDate(),
    hour: current.getHours(),
    year: current.getFullYear(),
    month: current.getMonth(),
    minute: current.getMinutes(),
    second: current.getSeconds(),
  };
}
