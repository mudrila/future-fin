import { makeStyles } from "@material-ui/core/styles";

function useStyles({ spacing }) {
  return {
    subHeadingItem: {
      borderRight: "1px solid grey",
      flexWrap: "wrap",
      flexDirection: "column",
      justifyContent: "space-between",
      marginRight: spacing(1),
      paddingRight: spacing(1)
    },
    lastSubHeading: {
      flexWrap: "wrap",
      flexDirection: "column",
      justifyContent: "space-between"
    }
  };
}

export default makeStyles(useStyles);
