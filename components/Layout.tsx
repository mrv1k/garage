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
}: Props): JSX.Element => {
  return (
    <div className="grid p-5 xl:max-w-screen-xl sm:grid-cols-5 md:pb-8 md:mx-auto">
      {title && (
        <Head>
          <title>{title}</title>
        </Head>
      )}

      <header className="relative mb-4 col-span-full md:col-start-2 md:col-end-6">
        {/* double height to fit 2 line title */}
        <h1 className="text-5xl font-bold text-logo-orange md:h-24">{title}</h1>
        <div className="bottom-0 right-0 pr-2 font-mono text-sm text-gray-350 md:absolute md:text-right min-w-max md:mr-8 xl:mr-0">
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
