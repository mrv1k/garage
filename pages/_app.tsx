// dark- hard, medium, pale, soft
// light- hard, medium, soft
// preview on https://highlightjs.org/static/demo/
import type { AppProps /*, AppContext */ } from "next/app";
import "../styles/globals.css";

function Garage({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div className="relative garage">
      <div id="top" className="absolute top-0 right-0 pt-5 pr-5">
        <a href="#bottom" className="goto-button">
          goto bottom
        </a>
      </div>

      <Component {...pageProps} />

      <div id="bottom" className="absolute bottom-0 right-0 pb-5 pr-5">
        <a href="#top" className="goto-button">
          goto top
        </a>
      </div>
    </div>
  );
}

export default Garage;
