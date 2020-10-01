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
      paddingLeft: ({ isMobile }) => (isMobile ? 0 : "25%"),
      paddingRight: ({ isMobile }) => (isMobile ? 0 : "35%"),
      marginTop: theme.spacing(1)
    },
    numberInput: {
      width: ({ isMobile }) => (isMobile ? "100%" : "30%"),
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      marginBottom: ({ isMobile }) =>
        isMobile ? theme.spacing(3) : theme.spacing(2)
    }
  };
}

export default makeStyles(useStyles);
