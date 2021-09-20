import { PropsWithChildren } from "react";

export const Grid = ({
  children,
  className = "v-layout-core",
}: PropsWithChildren<{ className: string }>) => {
  if (className && className.includes("span"))
    console.warn("*-span is floats around the page, it's better to explicit");

  return <div className={className}>{children}</div>;
};

export default Grid;
