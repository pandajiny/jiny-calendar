import React from "react";

import { Container, Box } from "@material-ui/core";
import { Logo } from "./Logo";
import { NavBar } from "./NavBar";
import { useStyles } from "../../MuiTheme";

export function Header() {
  const classes = useStyles();
  return (
    <div className="header">
      <Container maxWidth="lg">
        <Box className={classes.rowBox}>
          <Logo />
          <NavBar />
        </Box>
      </Container>
    </div>
  );
}

export default Header;
