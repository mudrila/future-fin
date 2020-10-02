import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(({ spacing }) => ({
  inputField: {
    marginTop: spacing(2),
    marginBottom: spacing(2)
  },
  dialogRoot: {
    minWidth: ({ fullScreen }) => (fullScreen ? 320 : 600),
    padding: ({ fullScreen }) =>
      fullScreen ? 0 : `${spacing(1)}px ${spacing(3)}px`
  },
  detailsContainer: {
    flexWrap: "wrap"
  }
}));
