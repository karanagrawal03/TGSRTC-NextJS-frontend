import { Fragment } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import "./global.css";
import Header from "../components/header";
import Footer from "../components/footer";
import { TGSRTC } from "../constants";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <link rel="icon" href="../favicon.ico" type="image/x-icon" />
        <title>{TGSRTC}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  );
}

export default MyApp;
