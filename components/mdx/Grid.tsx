import { PropsWithChildren } from "react";

export const Grid = ({
  children,
  className = "col-span-7",
}: PropsWithChildren<{ className: string }>) => (
  <div className={className}>{children}</div>
);
