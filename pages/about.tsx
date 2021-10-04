/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import EmailContactLink from "../components/EmailContactLink";
import Layout from "../components/Layout";

export const GITHUB = "https://github.com/mrv1k";
export const LINKEDIN = "https://www.linkedin.com/in/vkhotimchenko/";

const AboutPage = (): JSX.Element => (
  <Layout title="About" className="prose">
    <section className="v-layout-core">
      <h2 className="">
        Hi, I'm
        <span className="text-v-orange"> Viktor</span>
      </h2>
    </section>

    <section className="v-layout-core">
      <p>
        I'm front-end developer based in Toronto, Canada. Currently, I work on
        personal projects and open to new opportunities.
      </p>

      <p>
        Get in touch: <EmailContactLink />
      </p>
    </section>

    <aside className="row-start-2 row-end-4 md:row-start-1 v-layout-right wrapper-of-me">
      <Image
        src="/portfolio/profile-big.jpg"
        width={340}
        height={340}
        alt="Image of Viktor"
        className="rounded image-of-me"
      />
    </aside>

    <section className="v-layout-core">
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

    <section className="v-layout-core">
      <h2 className="text-3xl font-semibold">Offline</h2>

      <p>
        When I'm not writing code, I'm thinking about code. If I happen to
        exhaust my working capacity I enjoy cycling, playing board games and
        watching movies.
      </p>
    </section>

    <footer className="pb-8 v-layout-core">
      <h2 className="text-3xl font-semibold">Get in touch</h2>
      <p>
        Always happy to meet interesting people. Email is: <EmailContactLink />{" "}
      </p>
      <p>Cheers</p>
    </footer>
  </Layout>
);

export default AboutPage;
