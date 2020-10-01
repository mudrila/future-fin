import { makeStyles } from "@material-ui/core/styles";
import { red, green } from "@material-ui/core/colors";

function useStyles(theme) {
  return {
    paper: {
      padding: "6px 16px",
      width: 200
    },
    successTile: {
      backgroundColor: green[900]
    },
    successText: {
      color: green[900]
    },
    errorTile: {
      backgroundColor: red[900]
    },
    errorText: {
      color: red[900]
    },
    heading: {
      width: "100%"
    },
    dialogTitle: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      paddingRight: theme.spacing(3)
    },
    closeDialogButton: {
      width: 40
    },
    dialogContent: {
      marginTop: theme.spacing(7),
      alignItems: "center",
      display: "flex"
    }
  };
}

export default makeStyles(useStyles);
