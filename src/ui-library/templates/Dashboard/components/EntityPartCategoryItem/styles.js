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
    },
    settingsIcon: {
      width: 40,
      height: 40,
      backgroundColor: "transparent",
      boxShadow: "none",
      "& svg": {
        fill: theme.palette.primary.main
      },
      "&:hover svg": {
        fill: "white"
      }
    },
    dragging: {
      opacity: 0.5,
      cursor: "move"
    },
    dropping: {
      opacity: 0.5,
      zIndex: 1,
      backgroundColor: "yellow"
    }
  };
}
export default makeStyles(useStyles);
