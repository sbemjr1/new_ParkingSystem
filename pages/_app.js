import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <Script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=849aef8dba0362042d2c4dcbe31d744d"
        ></Script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
