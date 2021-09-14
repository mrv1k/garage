import Link from "next/link";

type LinkProps = React.PropsWithChildren<{ href: string }>;
const CustomLink = ({ href, ...otherProps }: LinkProps) => {
  return (
    <Link href={href}>
      <a className="v-underline" {...otherProps} />
    </Link>
  );
};

// const Img: React.FC<any> = (props) => {
//   return (
//     <div className="relative w-full">
//       <Image {...props} layout="fill" objectFit="none" />
//     </div>
//   );
// };

// export type ComponentMap = {
//     [name: string]: string | React.ComponentType<{}> | ComponentMap;
// };
// xmd map is slightly different from @mdx/loader
// ComponentMap causes more trouble than it's worth, break out of it
const mdxComponents: any = {
  /* Custom */
  /* Default Markdown */
  pre: (props: any) => <div {...props} />,
  // code: CodeBlock,
  a: CustomLink,
  // blockquote: undefined,
  // em: undefined,
  // [name: string]: string | React.ComponentType<{}> | ComponentMap;
  // h1: undefined,
  // h2: undefined,
  // h3: undefined,
  // h4: undefined,
  // h5: undefined,
  // h6: undefined,
  // hr: undefined,
  // img: undefined,
  // li: undefined,
  // ol: undefined,
  // p: undefined,
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
