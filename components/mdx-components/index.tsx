import { ComponentMap } from "mdx-bundler/client";
import Link from "next/link";
import CodeBlock from "./CodeBlock";

const CustomLink = ({ as, href, ...otherProps }) => {
  return (
    <>
      <Link as={as} href={href}>
        <a className="text-5xl custom-link" {...otherProps} />
      </Link>
    </>
  );
};

const mdxComponents: ComponentMap = {
  // Default Markdown
  pre: (props: any) => <div {...props} />,
  code: CodeBlock,
  a: CustomLink,
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
  // img: undefined,

  /* GitHub flavored markdown (GFM) */

  /* Custom */
};

export default mdxComponents;
