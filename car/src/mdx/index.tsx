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
  // p: undefined,
  // h1: undefined,
  // h2: undefined,
  // h3: undefined,
  // h4: undefined,
  // h5: undefined,
  // h6: undefined,
  // blockquote: undefined,
  // ul: undefined,
  // ol: undefined,
  // li: undefined,
  // table: undefined,
  // thead: undefined,
  // tbody: undefined,
  // tr: undefined,
  // td: undefined,
  // th: undefined,
  // inlineCode: undefined,
  // em: undefined,
  // strong: undefined,
  // del: undefined,
  // hr: undefined,
  // a: undefined,
  // img: undefined,
};

type Props = { compiledMDX: string };

const MDX = ({ compiledMDX }: Props): JSX.Element => (
  <MDXProvider components={components}>
    <MDXRenderer>{compiledMDX}</MDXRenderer>
  </MDXProvider>
);

export default MDX;
