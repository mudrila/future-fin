import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

function useStyles(theme) {
  return {
    form: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap"
    },
    avatarClassName: {
      width: 120,
      height: 120,
      color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: deepPurple[500]
    },
    root: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      paddingLeft: "25%",
      paddingRight: "35%"
    },
    deleteButton: {
      marginTop: theme.spacing(3),
      width: "100%"
    }
  };
}

export default makeStyles(useStyles);
