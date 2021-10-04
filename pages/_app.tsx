// dark- hard, medium, pale, soft
// light- hard, medium, soft
// preview on https://highlightjs.org/static/demo/
import type { AppProps /*, AppContext */ } from "next/app";
import { useRouter } from "next/dist/client/router";
import "../styles/globals.css";

function Garage({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();

  const isBlogPost = router.pathname.startsWith("/blog/");

  return (
    <div className="relative garage">
      <Component {...pageProps} />

      {isBlogPost && (
        <div id="top" className="absolute top-0 v-absolute-r">
          <a href="#bottom" className="goto-button">
            goto bottom
          </a>
        </div>
      )}

      {isBlogPost && (
        <div id="bottom" className="absolute v-absolute-b v-absolute-r">
          <a href="#top" className="goto-button">
            goto top
          </a>
        </div>
      )}
      {/* go to top on the left side for my homie @JemboDev */}
      {isBlogPost && (
        <div id="jembottom" className="absolute v-absolute-b v-absolute-l">
          <a href="#top" className="goto-button">
            goto top
          </a>
        </div>
      )}
    </div>
  );
}

export default Garage;
