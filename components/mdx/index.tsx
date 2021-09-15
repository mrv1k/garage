import Link from "next/link";
import { PropsWithChildren } from "react";
import MDXImage from "./Image";
import MDXParagraph from "./Paragraph";

type LinkProps = React.PropsWithChildren<{ href: string }>;
const CustomLink = ({ href, ...otherProps }: LinkProps) => {
  return (
    <Link href={href}>
      <a className="v-underline" {...otherProps} />
    </Link>
  );
};

// ComponentMap causes more trouble than it's worth, break out of it
// export type ComponentMap = {
//     [name: string]: string | React.ComponentType<{}> | ComponentMap;
// };
// xdm map is slightly different from @mdx/loader

const Grid = ({
  children,
  className,
}: PropsWithChildren<{ className: string }>) => {
  return <div className={className}>{children}</div>;
};

const mdxComponents: any = {
  /* Custom */
  Grid,

  /* Default Markdown */
  p: MDXParagraph,

  // ! image is unfinished
  img: MDXImage,
  // pre: undefined,
  // code: CodeBlock,
  a: CustomLink,
  // blockquote: undefined,
  // em: (props) => <div>BRUH</div>,
  // [name: string]: string | React.ComponentType<{}> | ComponentMap;
  // h1: undefined,
  // h2: undefined,
  // h3: undefined,
  // h4: undefined,
  // h5: undefined,
  // h6: undefined,
  // hr: undefined,

  // li: undefined,
  // ol: undefined,
  // pre: undefined,
  // strong: undefined,
  // ul: undefined,

  /* GitHub flavored markdown (GFM) */
  // del: undefined,
  // table: undefined,
  // tbody: undefined,
  // td: undefined,
  // th: undefined,
  // thead: undefined,
  // tr: undefined,
};

export default mdxComponents;
