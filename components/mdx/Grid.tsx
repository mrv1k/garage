import { PropsWithChildren } from "react";

export const Grid = ({
  children,
  className = "v-layout-core",
}: PropsWithChildren<{ className: string }>) => (
  <div className={className}>{children}</div>
);
