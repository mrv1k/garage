import Head from "next/head";
import Date from "../components/Date";
import Navigation from "./Navigation";

type Props = {
  children: React.ReactNode;
  title: string;
  created?: string;
  updated?: string;
  className?: string;
};

const Layout = ({
  children,
  title,
  created,
  updated,
  className = "",
  ...props
}: Props): JSX.Element => {
  console.log(props);

  return (
    <div className="grid max-w-screen-xl m-4 sm:grid-cols-5 md:mb-8 md:mx-auto v-layout">
      <Head>
        <title>{title}</title>
      </Head>

      <header className="relative mb-4 col-span-full md:col-start-2 md:col-end-6">
        {/* double height to fit 2 line title */}
        <h1 className="text-3xl font-bold md:text-5xl text-logo-orange md:h-24">
          {title}
        </h1>
        <div className="bottom-0 right-0 pr-2 font-mono text-sm text-gray-400 md:absolute md:text-right min-w-max md:mr-8 xl:mr-0">
          <div>{created && <Date created={created} />}</div>
          <div>{updated && <Date updated={updated} />}</div>
        </div>
      </header>

      <Navigation />

      <main
        className={`grid sm:grid-cols-12 gap-1 md:col-span-4 col-span-full ${className}`}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
