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
      {isBlogPost && (
        <div id="top" className="absolute top-0 right-0 pt-5 pr-5">
          <a
            href="#bottom"
            className="font-mono no-underline goto-button right-4 text-gray-350 hover:text-gray-400"
          >
            goto bottom
          </a>
        </div>
      )}

      <Component {...pageProps} />

      {isBlogPost && (
        <div id="bottom" className="absolute bottom-0 right-0 pb-5 pr-5">
          <a
            href="#top"
            className="font-mono no-underline goto-button right-4 text-gray-350 hover:text-gray-400"
          >
            goto top
          </a>
        </div>
      )}
    </div>
  );
}

export default Garage;
