import GlobalStyles from "../styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout";

// Theme
import { theme } from "../styles/Theme";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Sahara</title>
        <meta name="sahara" content="Sahara web" />
        <link rel="icon" href="/Assets/Couple Session/SHR (TP).png" />
      </Head>
      <GlobalStyles />

      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
