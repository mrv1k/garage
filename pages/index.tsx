import Layout from "../components/Layout";

const IndexPage = (): JSX.Element => (
  <Layout title="Viktor Khotimchenko">
    <div
      className="p-4 text-yellow-700 bg-yellow-100 border-l-4 border-yellow-500 v-layout-core"
      role="alert"
    >
      <p className="font-bold">Caution!</p>
      <p>🚧👷‍♂️ Hard hats required. Website is under active construction ⚒️🏚</p>
    </div>
  </Layout>
);
export default IndexPage;
