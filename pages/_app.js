import { Provider } from "react-redux";
import PropTypes from "prop-types";
import NextApp from "next/app";
import Head from "next/head";
import { PersistGate } from "redux-persist/integration/react";
import { SnackbarProvider } from "notistack";
import Cookies from "js-cookie";

import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import { useStore } from "../src/store";
import theme from "../src/ui-library/theme";
import { Navigation } from "../src/ui-library";

const useStyles = makeStyles((theme) => ({
  innerContent: {
    display: "flex",
    padding: theme.spacing(0, 1),
    flexWrap: "wrap",
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: theme.spacing(7),
    marginLeft: 210
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
        <PersistGate persistor={store.__PERSISTOR} loading={null}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <SnackbarProvider maxSnack={5} preventDuplicate={true}>
                <Navigation />
                <main className={classes.content}>
                  <article className={classes.innerContent}>
                    <Component {...pageProps} />
                  </article>
                </main>
              </SnackbarProvider>
            </MuiPickersUtilsProvider>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.shape({
    initialReduxState: PropTypes.shape({})
  }),
  router: PropTypes.shape({
    route: PropTypes.string.isRequired
  })
};

App.getInitialProps = async (appContext) => {
  let token = Cookies.get("token");
  const { ctx } = appContext;
  if (!token && ctx && ctx.req) {
    // On server side js-cookie can't get cookes from request =/
    // Therefore - we need to try to get it from headers
    token = ctx.req.headers.cookie
      ? ctx.req.headers.cookie.split("token=")[1]
      : undefined;
  }
  if (
    ctx.res &&
    !token &&
    ctx.req.url !== "/login" &&
    ctx.req.url !== "/sign-up"
  ) {
    ctx.res.writeHead(302, { Location: "/login" });
    ctx.res.end();
  } else if (
    token &&
    ctx &&
    ctx.req &&
    (ctx.req.url === "/login" || ctx.req.url === "/sign-up")
  ) {
    ctx.res.writeHead(302, { Location: "/" });
    ctx.res.end();
  }
  const appProps = await NextApp.getInitialProps(appContext);
  return { ...appProps };
};
