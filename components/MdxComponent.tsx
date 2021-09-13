import { getMDXComponent } from "mdx-bundler/client";
import * as React from "react";

export default function Please({ code, frontmatter }) {
  // it's generally a good idea to memoize this function call to
  // avoid re-creating the component every render.
  console.log(code, frontmatter);
  const Component = React.useMemo(() => getMDXComponent(code), [code]);
  return (
    <>
      <header>
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.description}</p>
      </header>
      <main>
        <Component />
      </main>
    </>
  );
}
