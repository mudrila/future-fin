import { makeStyles } from "@material-ui/core/styles";

function useStyles(theme) {
  return {
    bordered: {
      border: "1px solid #c0c0c0",
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(2),
      padding: theme.spacing(2),
      borderRadius: 4
    }
  };
}

export default makeStyles(useStyles);
