import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

export function Logout() {
  const history = useHistory();

  useEffect(() => {
    localStorage.removeItem("email");
    localStorage.removeItem("name");
    history.push({ pathname: "/account" });
  });
  return <div>Logout</div>;
}
