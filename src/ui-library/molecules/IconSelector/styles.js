import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    minHeight: 500
  },
  form: {
    margin: theme.spacing(2, 0)
  },
  paper: {
    position: "sticky",
    top: 80,
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(2),
    width: "100%"
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  icon: {
    display: "inline-block",
    width: 86,
    overflow: "hidden",
    textOverflow: "ellipsis",
    textAlign: "center",
    color: theme.palette.text.secondary,
    margin: "0 4px",
    fontSize: 12,
    "& p": {
      margin: 0,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  },
  iconSvg: {
    boxSizing: "content-box",
    cursor: "pointer",
    color: theme.palette.primary.main,
    borderRadius: theme.shape.borderRadius,
    transition: theme.transitions.create(["background-color", "box-shadow"], {
      duration: theme.transitions.duration.shortest
    }),
    fontSize: 40,
    padding: theme.spacing(2),
    margin: theme.spacing(0.5, 0),
    "&:hover": {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[1],
      color: theme.palette.primary.main
    }
  },
  selectedIcon: {
    backgroundColor: theme.palette.primary.main,
    boxShadow: theme.shadows[1],
    color: "white"
  },
  results: {
    marginBottom: theme.spacing(1)
  }
}));
