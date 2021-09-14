import Highlight, { defaultProps, Language } from "prism-react-renderer";

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
  const language = languageClass.replace(/language-/, "") as Language;

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
            // eslint-disable-next-line react/jsx-key
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                // eslint-disable-next-line react/jsx-key
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
