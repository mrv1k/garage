import * as React from "react";

import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const NotFoundPage = (): JSX.Element => (
  <Layout>
    <>
      <Seo title="About" />

      <h1 className="pb-12 text-5xl font-bold col-span-full text-logo-orange">
        About
      </h1>

      <section className="col-span-8 max-w-prose">
        <p className="font-bold">Hi, I'm Viktor</p>

        <p>I'm a software engineer from Toronto, Canada.</p>

        <p>
          My professional career started in January of 2018 when I was hired by
          a local e-commerce startup. There, I was a single frontend developer
          responsible for all customer websites. I developed a Node.js build
          system that unified a codebase, improved performance and enabled A/B
          testing. I also developed a Vue.js components library that
          dramatically sped up design to deployment cycle.
        </p>

        <p>
          Now, I'm looking for new challenges to push my limits and hone my
          craft as an engineer.
        </p>
      </section>

      <aside className="col-span-3 col-start-10">
        <StaticImage
          className="rounded image-of-me aside"
          layout="fullWidth"
          formats={["auto", "webp", "avif"]}
          src="../images/profile-big.jpg"
          quality={80}
          alt="Viktor Khotimchenko profile picture"
        />
      </aside>

      <footer className="mt-8 text-gray-500 col-span-full">
        Projects are up on{" "}
        <a
          href="https://github.com/mrv1k"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          GitHub
        </a>
        <br />
        Social network of choice is{" "}
        <a
          href="https://www.linkedin.com/in/vkhotimchenko/"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          LinkedIn
        </a>
        <br />
        For direct contact{" "}
        <a href="mailto:viktorkhotimchenko@gmail.com">
          viktorkhotimchenko@gmail.com
        </a>
      </footer>
    </>
  </Layout>
);

export default NotFoundPage;
