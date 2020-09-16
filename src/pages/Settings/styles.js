import { makeStyles } from "@material-ui/core/styles";
import { red, deepPurple } from "@material-ui/core/colors";

function useStyles(theme) {
  return {
    form: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap"
    },
    root: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      paddingLeft: "25%",
      paddingRight: "35%"
    },
    numberInput: {
      width: "30%",
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      marginBottom: theme.spacing(2)
    }
  };
}

export default makeStyles(useStyles);
