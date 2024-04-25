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

function About() {
  return (
    <div className="absolute inset-0">
    <AboutHero/>  
      <FeatureGs/>
      <FeatureSection/>
      <AboutSection title={"Our Mission and Expertise"} img={"https://static.vecteezy.com/system/resources/previews/000/536/781/non_2x/success-in-business-start-up-businessman-on-rocket-vector-illustration.jpg"} desc={"At Glitter Trading, we specialize in event planning, tourism, public diplomacy, and environmental initiatives. With a strong foothold in the United States and East Africa, our team of seasoned professionals excels in organizing impactful socio-economic promotional activities, awareness campaigns, and business events. Collaborating closely with individuals, governments, private sectors, and corporations, we leverage our expertise to foster trade and investment opportunities in East Africa."}/>
      <AboutSectionRl title={"Our Commitment to Empowerment"} img={"https://th.bing.com/th/id/OIP.JxKhhSwTsdwNjmxB_uJdYQAAAA?rs=1&pid=ImgDetMain"} desc={"Central to our ethos is the empowerment of women entrepreneurs and small to medium-sized enterprises (SMEs) in East Africa. Recognizing their pivotal role in driving economic growth and development, we prioritize supporting, capacitating, and financing these vital stakeholders. By providing them with access to resources, networks, and financial opportunities, we aim to enhance their competitiveness on both regional and global scales."}/>
      <AboutSection title={"Championing Trade and Investment"} img={"https://www.worldfinance.com/wp-content/uploads/2020/05/HYCM_Trading_mobile-632x474.jpg"} desc={"Glitter Trading is dedicated to advancing the trade and investment landscape of East Africa. We believe in the power of connectivity and collaboration, forging partnerships that transcend borders and connect businesses with opportunities across the continent and beyond. Our strategic focus on promoting East African trade aligns with our vision of fostering economic prosperity and sustainable development in the region."}/>
      <AboutSectionRl title={"Driving Impact Through Collaboration"} img={"https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v211batch10-minty-076-teamwork_2.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=1eed81fa13bed5eabcbe0861af12bfa5"} desc={"Collaboration lies at the heart of our approach. By bringing together diverse stakeholders, including governments, private sectors, and corporate entities, we create synergies that drive meaningful impact. Through our comprehensive range of programs and initiatives, we facilitate knowledge exchange, capacity building, and market access, ultimately contributing to the realization of the African Continental Free Trade Area (AfCFTA) objectives and the empowerment of East African businesses, particularly women entrepreneurs and SMEs."}/>
      <CounterSection />
      <Partner />
      <Footer/>
    </div>
  );
}

export default About;
