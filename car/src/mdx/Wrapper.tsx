import React from "react";

type Props = {
  children: React.ReactNode;
};

const Wrapper = ({ children }: Props): JSX.Element => (
  <div className="mdx-wrapper">{children}</div>
);

export default Wrapper;
