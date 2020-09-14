import { makeStyles } from "@material-ui/core/styles";
import { red, green } from "@material-ui/core/colors";

function useStyles() {
  return {
    paper: {
      padding: "6px 16px"
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
    }
  };
}

export default makeStyles(useStyles);
