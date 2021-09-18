import { PropsWithChildren } from "react";

const LocalGrid = ({
  children,
  className = "v-layout-core",
}: PropsWithChildren<{ className: string }>) => {
  console.log(className);
  // if (className.includes("span"))
  //   console.warn("*-span is floats around the page, it's better to explicit");

  return <div className={className}>{children}</div>;
};

export default LocalGrid;
