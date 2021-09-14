// dark- hard, medium, pale, soft
// light- hard, medium, soft
// preview on https://highlightjs.org/static/demo/
import type { AppProps /*, AppContext */ } from "next/app";
import "../styles/theme.css";

function Garage({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div className="garage">
      <Component {...pageProps} />
    </div>
  );
}

export default Garage;
