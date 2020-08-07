import { Provider } from "react-redux";
import PropTypes from "prop-types";
import NextApp from "next/app";
import Head from "next/head";

import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import { useStore } from "../store";
import ROUTES from "../config/routes";
import theme from "../ui-library/theme";
import { Navigation } from "../ui-library";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: theme.spacing(5)
  }
}));
export default function App({ Component, pageProps }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  const store = useStore(pageProps.initialReduxState);
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>Financial Plan Builder | FutureFin</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navigation items={ROUTES} />
          <main className={classes.content}>
            <article className={classes.toolbar}>
              <Component {...pageProps} />
            </article>
          </main>
        </ThemeProvider>
      </Provider>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.shape({
    initialReduxState: PropTypes.shape({})
  })
};

App.getInitialProps = async (appContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return { ...appProps };
};
