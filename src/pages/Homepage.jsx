import React, { useEffect } from "react";
import { Element } from "react-scroll";
import Layout from "../components/Layout/Layout";
import About from "../components/Sections/About";
import Clients from "../components/Sections/Clients";
import Herosection from "../components/Sections/Herosection";
import SectionHeading from "../components/Items/SectionHeading";
import Skills from "../components/Sections/Skills";
import Funfacts from "../components/Sections/Funfacts";
import Services from "../components/Sections/Services";
import Experiences from "../components/Sections/Experiences";
import Contact from "../components/Sections/Contact";

function Homepage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <Element name="section-home">
        <Herosection />
      </Element>

      <Element name="section-about">
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="About Me" />
          <About />
        </section>
      </Element>

      <Element name="section-skills">
        <section className="shadow-blue color-white padding">
          <div className="overlay"></div>
          <SectionHeading className="color-white" title="My skills" />
          <Skills />
        </section>
      </Element>

      <Element name="section-funfacts">
        <Funfacts />
      </Element>

      <Element name="section-services">
        <section className="shadow-blue color-white padding">
          <div className="overlay"></div>
          <SectionHeading className="color-white" title="Services" />
          <Services />
        </section>
      </Element>

      <Element name="section-experiences">
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="Experience" />
          <Experiences />
        </section>
      </Element>

      <Element name="section-clients">
        <Clients />
      </Element>

      <Element name="section-contact">
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="Get in touch" />
          <Contact />
        </section>
      </Element>
    </Layout>
  );
}

export default Homepage;
