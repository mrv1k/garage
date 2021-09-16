import Navigation from "./Navigation";

type Props = {
  children: React.ReactNode;
  title: string;
  date?: string;
  className?: string;
};

const Layout = ({
  children,
  title,
  date,
  className = "",
}: Props): JSX.Element => {
  return (
    <div className="grid max-w-screen-xl grid-cols-5 m-4 md:mb-8 md:mx-auto">
      <header
        className="mb-5 md:h-24 col-span-full md:col-start-2 md:col-end-6 md:mb-0"
        itemProp="headline"
      >
        <h1 className="text-5xl font-bold text-logo-orange">{title}</h1>
        {date && <p className="date">{date}</p>}
      </header>

      <Navigation />

      <main
        className={`grid grid-cols-12 gap-1 md:col-span-4 col-span-full ${className}`}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
