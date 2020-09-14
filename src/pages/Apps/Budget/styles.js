import { makeStyles } from "@material-ui/core/styles";

function useStyles() {
  return {
    subHeadingItem: {
      position: "relative",
      "&:after": {
        position: "absolute",
        width: 2,
        height: 55,
        backgroundColor: "grey",
        content: "' '",
        display: "block",
        right: 5,
        top: 0
      }
    }
  };
}

export default makeStyles(useStyles);
