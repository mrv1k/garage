import type { AppProps /*, AppContext */ } from "next/app";
import "../styles/theme.css";

function Garage({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

export default Garage;
