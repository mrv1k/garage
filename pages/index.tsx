import Head from "next/head";
import Layout from "../components/Layout";

const IndexPage = (): JSX.Element => (
  <Layout title="">
    <Head>
      <title>Viktor Khotimchenko </title>
    </Head>

    <div className="min-h-screen v-layout-full v-home-flex">
      <header>
        <span className="text-xl">Hi, my name is</span>
        <h1 className="text-5xl font-bold">
          <span className="text-v-orange">Viktor Khotimchenko</span>.
        </h1>
      </header>

      <div className="col-span-9 pt-3 pb-6 text-5xl font-bold basis-75 ">
        I bring designs to life with React and TypeScript
      </div>

      <p>
        Frontend Developer. Currently, building this website to serve as my
        self-education log. Open to new opportunities.
      </p>

      <div className="mt-8">
        <a
          className="!no-underline border rounded py-3 px-11 text-v-orange border-v-orange hover:bg-v-orange hover:text-v-beige"
          href="mailto:viktorkhotimchenko@gmail.com"
        >
          Get in touch
        </a>
      </div>
      {/* <button className="p-4 rounded bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ...">
          Sign up
        </button> */}
    </div>

    <div className="min-h-screen v-layout-full">page 2</div>
  </Layout>
);
export default IndexPage;
