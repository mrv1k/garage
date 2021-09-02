import * as React from "react";

import { StaticImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { AboutPageQuery } from "../graphql-codegen-types";

const EmailLink = () => (
  <a className="text-logo-orange" href="mailto:viktorkhotimchenko@gmail.com">
    viktorkhotimchenko@gmail.com
  </a>
);

const AboutPage = (): JSX.Element => {
  const data = useStaticQuery<AboutPageQuery>(graphql`
    query AboutPage {
      site {
        siteMetadata {
          social {
            github
            linkedin
            twitter
          }
          author {
            name
            email
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <>
        <Seo title="About" />

        <h1 className="pb-8 text-5xl font-bold col-span-full text-logo-orange">
          About
        </h1>

        <section className="col-core">
          <h2 className="text-3xl font-semibold">
            Hi, I'm
            <span className="text-logo-orange"> Viktor</span>
          </h2>
          <p>
            I'm front-end developer based in Toronto, Canada. I currently work
            on personal projects and open to new opportunities.
          </p>

          <p>
            Get in touch: <EmailLink />
          </p>
        </section>

        <aside className="row-start-2 pb-8 md:row-start-2 md:row-end-5 col-aside md:pb-0">
          <StaticImage
            className="image-of-me"
            imgClassName="rounded"
            formats={["auto", "webp", "avif"]}
            layout="fullWidth"
            src="../images/profile-big.jpg"
            quality={80}
            alt="Viktor Khotimchenko profile picture"
          />
        </aside>

        <section className="col-core">
          <h2 className="text-3xl font-semibold">How I got here</h2>
          <div>
            <p>
              I wasn't always as happy and as determined with my career path.
            </p>
            <p>
              When I graduated college in 2015 I struggled to find a developer
              job. Soon after, I run out of money and had to get any job. I felt
              defeated and stopped programming.
            </p>
            <p>
              I went like that till 2017 when having a job stopped being enough.
              I wanted a career. The question was, what career? I explored
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
        </section>

        <section className="col-core">
          <h2 className="text-3xl font-semibold">Offline</h2>

          <p>
            When I'm not writing code, I'm thinking about code. If I happen to
            exhaust my working capacity I enjoy cycling, playing board games and
            watching movies.
          </p>
        </section>

        <section className="socials col-core">
          <h2 className="text-3xl font-semibold">Online</h2>
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

        <footer className="col-core md:pb-0">
          <h2 className="text-3xl font-semibold">Get in touch</h2>
          <p>
            Always happy to meet interesting people. Email is: <EmailLink />{" "}
          </p>
          <p>Cheers</p>
        </footer>
      </>
    </Layout>
  );
};

export default AboutPage;
