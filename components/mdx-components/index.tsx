import Image from "next/image";
import Link from "next/link";
import { checkImageExtension } from "../../lib/helpers";

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
    <Image
      alt={alt}
      src={src}
      // intrinsic is default, alternative would be to use responsive
      layout="intrinsic"
      width={width}
      height={height}
    />
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
  p: ({ children }: any) => {
    // Markdown: Pretty much everything is wrapped in <p> tag
    // next/image. (Image) automatically wraps image in a div to take up space while image loads
    // and then there's this: Warning: validateDOMNesting(...): <div> cannot appear as a descendant of <p>
    // This is the the best I came up with to avoid clashing with other tags that may have "src" attribute

    if (children && children.props && children.props.src) {
      const isImage = checkImageExtension(children.props.src as string);
      if (isImage) {
        return <div>{children}</div>;
      }
    }
    return <p>{children}</p>;
  },
  img: mdxImage,
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
