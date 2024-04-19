import React from "react";
import Hero from "../Components/Hero/Hero";
import BlogSection from "../Components/Blog/BlogSection";
import ContactSection from "../Components/Contact/ContactSection";
import Partner from "../Components/OurPartner/Partner";
import CounterSection from "../Components/Counter/CounterSection";
import OurClient from "../Components/OurPartner/OurClient";
import AboutSection from "../Components/About/AboutSection";
import AboutSectionRl from "../Components/About/AboutSectionlr";
import FeatureGs from "../Components/Feauter/FeatureGs";

function About() {
  return (
    <div className="background absolute inset-0">
      <Hero />
      <FeatureGs/>

      <AboutSection/>
      <AboutSectionRl/>
      <AboutSection/>
      <CounterSection/>
      
      <Partner />
    </div>
  );
}

export default About;
