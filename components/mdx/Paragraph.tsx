import { checkImageExtension } from "../../lib/helpers";

const MDXParagraph = ({ children }: any) => {
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
};

export default MDXParagraph;
