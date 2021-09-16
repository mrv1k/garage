/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import EmailContactLink from "../components/EmailContactLink";
import Layout from "../components/Layout";
import profileBig from "../public/images/profile-big.jpg";

const GITHUB = "https://github.com/mrv1k";
const LINKEDIN = "https://www.linkedin.com/in/vkhotimchenko/";
// const NAME = "Viktor Khotimchenko";

const AboutPage = (): JSX.Element => (
  <Layout title="About">
    {/* <Seo titleLeft="About" path={path} /> */}

    <section className="grid-core">
      <h2 className="text-3xl font-semibold">
        Hi, I'm
        <span className="text-logo-orange"> Viktor</span>
      </h2>
      <p>
        I'm front-end developer based in Toronto, Canada. Currently, I work on
        personal projects and open to new opportunities.
      </p>

      <p>
        Get in touch: <EmailContactLink />
      </p>
    </section>

    <aside className="row-start-2 grid-right">
      <Image
        src={profileBig}
        alt="Image of Viktor"
        className="rounded image-of-me"
      />
    </aside>

    <section className="grid-core">
      <h2 className="text-3xl font-semibold">How I got here</h2>
      <div>
        <p>I wasn't always as happy and as determined with my career path.</p>
        <p>
          When I graduated college in 2015 I struggled to find a developer job.
          Soon after, I run out of money and had to get any job. I felt defeated
          and stopped programming.
        </p>
        <p>
          I went like that till 2017 when having a job stopped being enough. I
          wanted a career. The question was, what career? I explored activities
          such as 3D modeling, video editing, print design and others. Searching
          for something to overshadow programming. Nothing did. After the
          experiment, it was clear that I must return to programming. I got back
          up to speed with JavaScript (by reading YDKJS book series and
          completing FCC front-end path) and was hired by local e-commerce
          startup in 2018 where I worked for 2 years.
        </p>
        <p>
          There, I was a sole developer responsible for all customer facing
          websites. To help me manage it, I developed a Node.js build system
          that enabled to share core functionality, improved performance and
          enabled A/B testing. I also developed a Vue.js components library that
          dramatically shortened website design to deployment cycle.
        </p>
      </div>
    </section>

    <section className="grid-core">
      <h2 className="text-3xl font-semibold">Offline</h2>

      <p>
        When I'm not writing code, I'm thinking about code. If I happen to
        exhaust my working capacity I enjoy cycling, playing board games and
        watching movies.
      </p>
    </section>

    <section className="socials grid-core">
      <h2 className="text-3xl font-semibold">Online</h2>
      <ul className="list-disc list-inside">
        <li>
          Projects are up on{" "}
          <a href={GITHUB} target="_blank" rel="nofollow noopener noreferrer">
            GitHub
          </a>
        </li>
        <li>
          Social network of choice is{" "}
          <a href={LINKEDIN} target="_blank" rel="nofollow noopener noreferrer">
            LinkedIn
          </a>
        </li>
      </ul>
    </section>

    <footer className="grid-core md:pb-0">
      <h2 className="text-3xl font-semibold">Get in touch</h2>
      <p>
        Always happy to meet interesting people. Email is: <EmailContactLink />{" "}
      </p>
      <p>Cheers</p>
    </footer>
  </Layout>
);

export default AboutPage;
