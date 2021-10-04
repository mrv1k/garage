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

      {/* can't nest bottom button inside #top div because then clicking top button wont' go to 0,0 top */}
      {isBlogPost && (
        <>
          <div id="top" className="absolute top-0 left-0" />

          {/* custom top-13 because I can */}
          <div className="absolute go-bottom right-1 md:right-4 top-[52px]">
            <a href="#bottom" className="goto-button">
              bottom
            </a>
          </div>

          <div id="bottom" className="absolute bottom-3 right-1 md:right-4">
            <a href="#top" className="goto-button ">
              top
            </a>
          </div>

          <div id="jembottom" className="absolute bottom-3 left-1 md:left-4">
            <a href="#top" className="goto-button">
              j-top
            </a>
          </div>
        </>
      )}
    </div>
  );
}

export default Garage;
