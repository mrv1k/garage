import { checkImageExtension } from "../../lib/helpers";

const MDXParagraph = ({ children }: any) => {
  // Markdown: Pretty much everything is wrapped in <p> tag
  // next/image. (Image) automatically wraps image in a div to take up space while image loads
  // and then there's this: Warning: validateDOMNesting(...): <div> cannot appear as a descendant of <p>
  // This is the the best I came up with to avoid clashing with other tags that may have "src" attribute
  if (children && children.props) {
    // console.log(children.props);
    if (children.props.src) {
      if (checkImageExtension(children.props.src as string)) {
        return <>{children}</>;
      }
    }
  }
  return <p>{children}</p>;
};

export default MDXParagraph;
