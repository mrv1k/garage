// dark- hard, medium, pale, soft
// light- hard, medium, soft
// preview on https://highlightjs.org/static/demo/
import type { AppProps /*, AppContext */ } from "next/app";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import "../styles/globals.css";

function Garage({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();

  const isBlogPost = router.pathname.startsWith("/blog/");

  return (
    <div className="relative garage">
      <Head>
        {/* <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" /> */}

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/common/icons/16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/common/icons/32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link
          href="/common/icons/192x192.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <meta name="theme-color" content="#eb4a2e" />
      </Head>

      <Component {...pageProps} />

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
