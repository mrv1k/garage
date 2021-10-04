import Head from "next/head";
import Layout from "../components/Layout";

const IndexPage = (): JSX.Element => (
  <Layout title="">
    <Head>
      <title>Viktor Khotimchenko</title>
    </Head>

    <div className="md:v-h-remaining-screen v-layout-full v-home-flex">
      <header>
        <span className="text-xl">Hi, my name is</span>
        <h1 className="font-bold v-text-giant">
          <span className="text-v-orange">Viktor Khotimchenko</span>.
        </h1>
      </header>

      <div className="col-span-9 pt-3 v-text-giant v-basis-75">
        I bring designs to life with React and TypeScript
      </div>

      <p className="py-6">
        Currently, working on making this website the coziest place on the
        Internet for myself. Open to new opportunities.
      </p>
      <div></div>

      <a
        className="!no-underline w-1/2 py-3 text-center align-middle border rounded md:w-auto v-basis-25 text-v-orange border-v-orange hover:bg-v-orange hover:text-v-beige active:bg-v-orange-600 active:border-v-orange-600"
        href="mailto:viktorkhotimchenko@gmail.com"
      >
        Get in touch
      </a>
    </div>
  </Layout>
);
export default IndexPage;
