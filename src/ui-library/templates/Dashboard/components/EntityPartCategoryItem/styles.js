import { makeStyles } from "@material-ui/core/styles";

function useStyles(theme) {
  return {
    root: {
      margin: theme.spacing(1),
      minWidth: 280,
      minHeight: 220
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
    },
    actionIcon: {
      marginBottom: theme.spacing(1)
    }
  };
}
export default makeStyles(useStyles);
