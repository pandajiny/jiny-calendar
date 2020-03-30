import { createMuiTheme, makeStyles } from "@material-ui/core/styles";

export const theme = createMuiTheme({});

export const useStyles = makeStyles(theme => ({
  flexRoot: {
    flexGrow: 1
  },
  columnBox: {
    display: "flex",
    flexDirection: "column"
  },
  rowBox: {
    display: "flex",
    flexDirection: "row"
  }
}));
