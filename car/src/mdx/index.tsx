import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import CodeBlock from "./CodeBlock";
import Wrapper from "./Wrapper";

const components = {
  pre: CodeBlock,
  wrapper: Wrapper,
};

type Props = { compiledMDX: string };

const MDX = ({ compiledMDX }: Props): JSX.Element => (
  <MDXProvider components={components}>
    <MDXRenderer components={components}>{compiledMDX}</MDXRenderer>
  </MDXProvider>
);

export default MDX;
