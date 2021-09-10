import "../styles/theme.css";
import type { AppProps /*, AppContext */ } from "next/app";

function Garage({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default Garage;
