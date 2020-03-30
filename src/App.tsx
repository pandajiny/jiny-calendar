import React from "react";
import Router from "./Router";

import NavBar from "./components/header/Header";
import { Header } from "./components/header/Header";
import { CssBaseline } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Router />
    </div>
  );
}

export default App;
