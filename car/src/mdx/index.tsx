import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import CodeBlock from "./CodeBlock";
import Wrapper from "./Wrapper";

const components = {
  // eslint-disable-next-line react/jsx-props-no-spreading, @typescript-eslint/no-explicit-any
  pre: (props: any) => <div {...props} />,
  wrapper: Wrapper,
  code: CodeBlock,
};

type Props = { compiledMDX: string };

const MDX = ({ compiledMDX }: Props): JSX.Element => (
  <MDXProvider components={components}>
    <MDXRenderer>{compiledMDX}</MDXRenderer>
  </MDXProvider>
);

export default MDX;
