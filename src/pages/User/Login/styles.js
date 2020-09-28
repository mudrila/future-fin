import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(({ spacing }) => ({
  root: {
    padding: ({ isMobile }) => (isMobile ? spacing(2) : spacing(6)),
    marginTop: spacing(10),
    marginLeft: "auto",
    marginRight: "auto"
  }
}));
