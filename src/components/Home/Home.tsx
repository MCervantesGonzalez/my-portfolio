import React from "react";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import Resume from "./Resume/Resume";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import SectionDivider from "@/components/Helper/SectionDivider";

function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Resume />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Contact />
    </div>
  );
}

export default Home;
