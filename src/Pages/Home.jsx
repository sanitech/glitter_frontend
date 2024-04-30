import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Subscribe from '../Components/Subscribe/Subscribe'
import Hero from '../Components/Hero/Hero'
import CounterSection from '../Components/Counter/CounterSection'
import BlogSection from '../Components/Blog/BlogSection'
import ContactSection from '../Components/Contact/ContactSection'
import Partner from '../Components/OurPartner/Partner'
import OurClient from '../Components/OurPartner/OurClient'
import FeatureSection from '../Components/Feauter/FeatureSection'
import CardSlider from '../Components/CardCarsoule/CardCarsoule'
import EventCards from '../Components/CardCarsoule/EventCards'
import EventCard2 from '../Components/CardCarsoule/EventCard2'
import EmblaCarousel from '../Components/CardCarsoule/EmblaCarousel'
import MyEventCards from '../Components/CardCarsoule/MyEventCards'
import AboutSection from '../Components/About/AboutSection'
import Cat from '../Components/Cat/Cat'
import Faq from '../Components/FAQ/Faq'
import Footer from '../Components/Footer/Footer'
import FeatureGs from '../Components/Feauter/FeatureGs'
import collaboration from '../assets/images/collaboration.png'
import WebsiteOpacityEffect from '../PaymentController'

function Home({ isDarkMode }) {

  return (
    <div className='w-full  background absolute inset-0' >
      <Hero />
      <WebsiteOpacityEffect paymentStatus={false} />

      <FeatureSection/>
      <EventCard2/>
      <Cat/>
      
      
      <BlogSection />
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
      <ContactSection/>
      <Partner />
      <Faq/>
      <Subscribe/>
      <Footer />

    </div>
  )
}

// style={{backgroundImage: `url("https://as1.ftcdn.net/v2/jpg/06/86/43/36/1000_F_686433691_RHhAgDmHUIUMguOuOarN4uWfhaB8Gk8f.jpg")`, height: '100vh', backgroundRepeat: 'no-repeat', backgroundSize:'cover'}}

export default Home
