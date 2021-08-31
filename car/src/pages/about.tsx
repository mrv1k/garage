import * as React from "react";

import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const NotFoundPage = (): JSX.Element => (
  <Layout>
    <>
      <Seo title="About" />

      <h1 className="pb-8 text-5xl font-bold col-span-full text-logo-orange">
        About
      </h1>

      <section className="col-span-7 pb-6">
        <h2 className="pb-4 text-3xl font-semibold">Hi, I'm Viktor</h2>

        <div>
          <p>
            I'm a software engineer from Toronto, Canada. My focus is on writing
            engaging &amp; performant websites for humans.
          </p>
          <p>
            Recently, I got my PR and now proudly call Canada my home. With
            immigration out of the way, I'm looking for a long term opportunity
            as a TypeScript developer that I can just as proudly call home.
          </p>
        </div>
      </section>

      <aside className="col-span-3 col-start-9 row-span-2">
        <StaticImage
          className="rounded image-of-me aside"
          layout="fullWidth"
          formats={["auto", "webp", "avif"]}
          src="../images/profile-big.jpg"
          quality={80}
          alt="Viktor Khotimchenko profile picture"
        />
      </aside>

      <section className="col-span-7">
        <h2 className="pb-6 text-3xl font-semibold">Offline</h2>

        <p>
          When I'm not writing code, I'm thinking about code. After I exhaust my
          working capacity for the day I enjoy cycling, playing board games or
          watching movies.
        </p>
      </section>

      <section className="col-span-7 pb-6">
        <h2 className="pt-4 pb-4 text-3xl font-semibold">Online</h2>
        <ul className="list-disc">
          <li>
            Projects are up on{" "}
            <a
              href="https://github.com/mrv1k"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            Social network of choice is{" "}
            <a
              href="https://www.linkedin.com/in/vkhotimchenko/"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </section>

      <aside className="col-span-7">
        <h2 className="pt-4 pb-4 text-3xl font-semibold">How I got here</h2>
        <div>
          <p>I wasn't always as happy and as determined with my career path.</p>
          <p>
            After I graduated college in 2015 I struggled to find a developer
            job. Soon after, I run out of money and had to get any job. I felt
            defeated and stopped programming.
          </p>
          <p>
            I went like that till 2017 when having a job stopped being enough. I
            wanted a career. The question was, what career? I explored
            activities such as 3D modeling, video editing, print design and
            others. Searching for something to overshadow programming. Nothing
            did. After the experiment, it was clear that I must return to
            programming. I got back up to speed with JavaScript (by reading
            YDKJS book series and completing FCC front-end path) and was hired
            by local e-commerce startup in 2018 where I worked for 2 years.
          </p>
          <p>
            There, I was a sole developer responsible for all customer facing
            websites. To help me manage it, I developed a Node.js build system
            that enabled to share core functionality, improved performance and
            enabled A/B testing. I also developed a Vue.js components library
            that dramatically shortened website design to deployment cycle.
          </p>
        </div>
      </aside>

      <footer className="col-span-7">
        <h2 className="pt-4 pb-4 text-3xl font-semibold">Get in touch</h2>
        <div>Always happy to meet interesting people.</div>
        Email is:
        <a href="mailto:viktorkhotimchenko@gmail.com">
          viktorkhotimchenko@gmail.com
        </a>
        <div>Cheers</div>
      </footer>
    </>
  </Layout>
);

export default NotFoundPage;
