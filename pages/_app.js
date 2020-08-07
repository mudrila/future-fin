import { Provider } from "react-redux";
import PropTypes from "prop-types";
import NextApp from "next/app";
import Head from "next/head";

import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import { useStore } from "../store";
import ROUTES from "../config/routes";
import theme from "../ui-library/theme";
import { Navigation } from "../ui-library";

export default function App({ Component, pageProps }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  const store = useStore(pageProps.initialReduxState);

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
          <Component {...pageProps} />
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
