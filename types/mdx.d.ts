declare module "*.mdx" {
  import { MDXContent } from "xdm/lib/evaluate";
  const MDXComponentType: MDXContent;
  export default MDXComponentType;
}

// /Users/mrv1k/code/garage/node_modules/xdm/lib/evaluate.d.ts

// export type MDXContentProps = {
//   [props: string]: any
//   components?: ComponentMap | undefined
// }
// export type MDXContent = (props: MDXContentProps) => any
// export type ExportMap = {
//   [exports: string]: unknown
//   default: MDXContent
// }
