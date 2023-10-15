import "../styles/globals.css";
import Head from "next/head";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=849aef8dba0362042d2c4dcbe31d744d"
        ></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
