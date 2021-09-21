import CustomLink from "./CustomLink";
import Grid from "./Grid";
import Image from "./Image";

// ComponentMap causes more trouble than it's worth, break out of it
// export type ComponentMap = {
//     [name: string]: string | React.ComponentType<{}> | ComponentMap;
// };
// xdm map is slightly different from @mdx/loader
const mdxComponents: any = {
  /**
   * Any next/components (like next/image), need to be exposed through components.
   * Some of them rely on process.env.and leaks when used through
   */

  /* Custom */
  Grid,
  Image,

  // Default Layout wrapper, can enable as base line and provide a fragment component to opt out, but <NoGrid> component feels weird
  // Which is why default wrapper disabled
  // wrapper: Grid,

  /* Default Markdown */
  a: CustomLink,
  // img: undefined, // Customizing img tag is limits props to src, alt and title. Tried it, not a good idea. Use custom tag instead.
  // pre: undefined,
  // code: undefined,
  // blockquote: undefined,

  // em: undefined
  // strong: undefined,

  // h1: undefined,
  // h2: undefined,
  // h3: undefined,
  // h4: undefined,
  // h5: undefined,
  // h6: undefined,
  // hr: undefined,

  // ol: undefined,
  // ul: undefined,
  // li: undefined,

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
