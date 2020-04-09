import React from "react";
import { Router } from "./Router";
import { Header } from "./components/header/Header";
import { CssBaseline, Container } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Container maxWidth="md">
        <Router />
      </Container>
    </div>
  );
}

export default App;
