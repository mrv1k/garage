import Head from "next/head";
import Layout from "../components/Layout";

const IndexPage = (): JSX.Element => (
  <Layout title="">
    <Head>
      <title>Viktor Khotimchenko </title>
    </Head>

    <div className="v-layout-core">
      <span className="text-xl">Hi, I’m</span>
      <header>
        <h1 className="text-5xl font-bold">
          <span className="text-logo-orange">Viktor Khotimchenko</span>.
        </h1>
      </header>
    </div>

    <div className="col-span-9 pt-3 pb-6 text-5xl font-bold">
      I bring your designs to life with React and TypeScript
    </div>

    <div className="v-layout-core">
      Currently, building this website to be my public learning platform. Open
      to new opportunities.
      <div className="mt-8">
        <a
          className="!no-underline border rounded py-3 px-11 border-logo-orange hover:bg-logo-orange hover:text-logo-beige"
          href="mailto:viktorkhotimchenko@gmail.com"
        >
          Get in touch
        </a>
      </div>
      {/* <button className="p-4 rounded bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ...">
          Sign up
        </button> */}
    </div>
  </Layout>
);
export default IndexPage;
