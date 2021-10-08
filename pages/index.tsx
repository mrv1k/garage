import Head from "next/head";
import Layout from "../components/Layout";

const IndexPage = (): JSX.Element => (
  <Layout
    title=""
    className="absolute -translate-y-1/2 top-1/2 md:static md:translate-y-0 md:top-auto"
  >
    <Head>
      <title>Viktor Khotimchenko</title>
    </Head>

    <div className="flex flex-wrap v-col-full">
      <header className="flex-initial md:v-basis-50">
        <span className="text-xl">Hi, my name is</span>
        <h1 className="font-bold v-text-giant">
          <span className="text-v-orange">Viktor Khotimchenko</span>.
        </h1>
      </header>

      <div className="flex-initial col-span-9 pt-3 v-text-giant md:v-basis-75">
        I bring designs to life with React and TypeScript
      </div>

      <p className="flex-initial py-6 md:v-basis-50">
        Currently, working on making this website the coziest place on the
        Internet for myself. Open to new opportunities.
      </p>

      <div className="flex-initial v-basis-100">
        <a
          className="!no-underline inline-block w-1/2 md:w-1/4 py-3 text-center align-middle border rounded text-v-orange border-v-orange hover:bg-v-orange hover:text-v-beige active:bg-v-orange-600 active:border-v-orange-600"
          href="mailto:viktorkhotimchenko@gmail.com"
        >
          Get in touch
        </a>
      </div>
    </div>
  </Layout>
);
export default IndexPage;
