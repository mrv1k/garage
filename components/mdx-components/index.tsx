import Image from "next/image";
import Link from "next/link";

type LinkProps = React.PropsWithChildren<{ href: string }>;
const CustomLink = ({ href, ...otherProps }: LinkProps) => {
  return (
    <Link href={href}>
      <a className="v-underline" {...otherProps} />
    </Link>
  );
};

const mdxImage = ({ src, alt: altWithSize }: { src: string; alt: string }) => {
  const [alt, size] = altWithSize.split(",");
  const [width, height = "512"] = size.split("x");

  // ! remote images are not handled yet ![Alt Text](https://get.svg.workers.dev/?s=64&f=gray "Image Title")
  // TODO: add support for remote images
  return (
    <span>
      <Image
        alt={alt}
        src={src}
        // intrinsic is default, alternative would be to use responsive
        layout="intrinsic"
        width={width}
        height={height}
      />
    </span>
  );
};

// ComponentMap causes more trouble than it's worth, break out of it
// export type ComponentMap = {
//     [name: string]: string | React.ComponentType<{}> | ComponentMap;
// };
// xdm map is slightly different from @mdx/loader

const mdxComponents: any = {
  /* Custom */

  /* Default Markdown */
  img: mdxImage,
  // pre: undefined,
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
