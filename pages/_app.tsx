import "../styles/globals.css";
import Header from "../components/Header";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
