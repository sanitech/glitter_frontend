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
import Footer from "../Components/Footer/Footer";
import AboutHero from "../Components/Hero/AboutHero";
import FeatureSection from "../Components/Feauter/FeatureSection";
import goal from '../assets/images/goal.png'
import vision from '../assets/images/vision.png'
import mission from '../assets/images/mission.png'
import Invest from '../assets/images/Invest.png'
import collaboration from '../assets/images/collaboration.png'
function About() {
  return (
    <div className="absolute inset-0">
      <AboutHero />
      <FeatureGs />
      <FeatureSection />
      <AboutSection
        title={"Our Mission and Expertise"}
        img={
          mission
        }
        desc={`At our core, we are passionate about propelling your brand to new heights.  
      We combine strategic thinking with creative flair to craft impactful promotions 
      that resonate with your target audience.  Our team of experts boasts a deep well of 
      experience across various channels, ensuring we select the perfect blend of online 
      marketing, social media engagement, captivating content, and traditional outreach 
      to maximize your reach and achieve measurable results.  We don't just promote, we 
      build momentum and cultivate lasting brand loyalty.
      `}
      />
      <AboutSectionRl
        title={"Our Vision"}
        img={
          vision
        }
        desc={`In a world saturated with messages, we envision a future 
          where brands cut through the noise and forge genuine connections. 
          We see ourselves as architects of impactful promotions, crafting 
          experiences that not only grab attention but spark conversations 
          and inspire brand advocacy.  Our vision is to be the catalyst that 
          propels your brand to the forefront, transforming promotions 
          from fleeting moments to cornerstones of long-term success.
          `}
      />
      <AboutSection
        title={"Our Goals: Your Success "}
        img={
          goal
        }
        desc={`our goals are inextricably linked to yours. We 
          strive to be your trusted partner in achieving promotional dominance. 
          This translates to exceeding your expectations by:`}
        list={[
          "Amplifying brand awareness",
          "Driving measurable results",
          "Cultivating customer loyalty",
          "Exceeding expectations",
        ]}
        note={`By partnering with us, you gain a dedicated team passionate
        about exceeding your promotional 
       goals and propelling your brand to long-term success.`}
      />
      <AboutSectionRl
        title={"Championing Trade and Investment"}
        img={
          Invest
        }
        desc={
          "Glitter Trading is dedicated to advancing the trade and investment landscape of East Africa. We believe in the power of connectivity and collaboration, forging partnerships that transcend borders and connect businesses with opportunities across the continent and beyond. Our strategic focus on promoting East African trade aligns with our vision of fostering economic prosperity and sustainable development in the region."
        }
      />
      <AboutSection
        title={"Driving Impact Through Collaboration"}
        img={
          collaboration
        }
        desc={
          "Collaboration lies at the heart of our approach. By bringing together diverse stakeholders, including governments, private sectors, and corporate entities, we create synergies that drive meaningful impact. Through our comprehensive range of programs and initiatives, we facilitate knowledge exchange, capacity building, and market access, ultimately contributing to the realization of the African Continental Free Trade Area (AfCFTA) objectives and the empowerment of East African businesses, particularly women entrepreneurs and SMEs."
        }
      />
      <CounterSection />
      <Partner />
      <Footer />
    </div>
  );
}

export default About;
