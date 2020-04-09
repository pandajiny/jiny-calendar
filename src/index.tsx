import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./MuiTheme";

import { ApolloProvider } from "react-apollo";
import { client } from "./apollo";

import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
