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
    color: theme.palette.text.primary,
    borderRadius: theme.shape.borderRadius,
    transition: theme.transitions.create(["background-color", "box-shadow"], {
      duration: theme.transitions.duration.shortest
    }),
    fontSize: 40,
    padding: theme.spacing(2),
    margin: theme.spacing(0.5, 0),
    "&:hover": {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[1]
    }
  },
  results: {
    marginBottom: theme.spacing(1)
  }
}));

export const useDialogStyles = makeStyles((theme) => ({
  markdown: {
    "& pre": {
      borderRadius: 0,
      margin: 0
    }
  },
  import: {
    textAlign: "right",
    padding: theme.spacing(0.5, 1)
  },
  container: {
    marginBottom: theme.spacing(5)
  },
  canvas: {
    fontSize: 210,
    marginTop: theme.spacing(2),
    color: theme.palette.primary.dark,
    backgroundSize: "30px 30px",
    backgroundColor: "#fff",
    backgroundPosition: "0 0, 0 15px, 15px -15px, -15px 0",
    backgroundImage:
      "linear-gradient(45deg, #f4f4f4 25%, transparent 25%), linear-gradient(-45deg, #f4f4f4 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f4f4f4 75%), linear-gradient(-45deg, transparent 75%, #f4f4f4 75%)"
  },
  fontSize: {
    margin: theme.spacing(2)
  },
  context: {
    margin: theme.spacing(0.5),
    padding: theme.spacing(1, 2),
    borderRadius: theme.shape.borderRadius,
    boxSizing: "content-box"
  },
  contextPrimary: {
    color: theme.palette.primary.main
  },
  contextPrimaryInverse: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main
  },
  contextTextPrimary: {
    color: theme.palette.text.primary
  },
  contextTextPrimaryInverse: {
    color: theme.palette.background.paper,
    backgroundColor: theme.palette.text.primary
  },
  contextTextSecondary: {
    color: theme.palette.text.secondary
  },
  contextTextSecondaryInverse: {
    color: theme.palette.background.paper,
    backgroundColor: theme.palette.text.secondary
  }
}));
