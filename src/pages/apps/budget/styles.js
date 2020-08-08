import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    flexWrap: "wrap"
  },
  section: {
    display: "flex",
    width: "100%",
    flexWrap: "wrap"
  },
  heading: {
    width: "100%",
    margin: theme.spacing(3)
  },
  divider: {
    width: "90%",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }
}));
