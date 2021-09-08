import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";

const CodeBlock = (props) => {
  // const className = props.children.props.className || "";
  // const matches = className.match(/language-(?<lang>.*)/);

  const code = props.children.props.children.trim();

  return (
    <Highlight
      // Default props imports stripped PrismJS and a theme, provide to avoid providing custom Prism version
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...defaultProps}
      // @ts-expect-error. `undefined` is a valid value. Breaks because of TS 4.4 new rule: `exactOptionalPropertyTypes`
      theme={undefined}
      code={code}
      language="jsx"
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                // eslint-disable-next-line react/jsx-props-no-spreading
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
