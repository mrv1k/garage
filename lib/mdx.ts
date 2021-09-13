import { bundleMDX } from "mdx-bundler";

const mdxSource = `
---
title: Example Post
published: 2021-02-13
description: This is some description
---

# Wahoo

import Demo from './demo'

Here's a **neat** demo:

<Demo />
`.trim();

const getMDX = async () => {
  const result = await bundleMDX(mdxSource, {
    files: {
      "./demo.tsx": `
import * as React from 'react'

function Demo() {
  return <div>Neat demo!</div>
}

export default Demo
    `,
    },
  });
  // console.log("getmdx", result);
  // published comes in Date format, therefore breaks Nextjs JSON serialization
  delete result.frontmatter.published;
  delete result.matter.data.published;
  console.log("getmdx", result);

  return result;
};

export { getMDX };
