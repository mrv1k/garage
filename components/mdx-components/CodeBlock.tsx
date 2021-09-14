import Highlight, { defaultProps } from "prism-react-renderer";

type Props = {
  // "children" is compiledMDX, thus always a string
  children: string;
  className: string;
};

const CodeBlock = ({
  children,
  className: languageClass = "",
}: Props): JSX.Element => {
  const code = children.trim();
  const language = languageClass.replace(/language-/, "");

  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <Highlight
      // Default props imports stripped PrismJS and a theme, provide to avoid providing custom Prism version
      {...defaultProps}
      theme={undefined}
      code={code}
      language={language}
    >
      {/* numeric keys are provided via function params */}
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
  /* eslint-enable react/jsx-props-no-spreading */
};

export default CodeBlock;
