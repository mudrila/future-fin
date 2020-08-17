import { makeStyles } from "@material-ui/core/styles";

function useStyles(theme) {
  return {
    root: {
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(1)
    },
    textHeader: {
      marginRight: theme.spacing(2)
    },
    cardHeader: {
      maxHeight: 80
    },
    cardContent: {
      textAlign: "center",
      paddingTop: 0
    }
  };
}
export default makeStyles(useStyles);
