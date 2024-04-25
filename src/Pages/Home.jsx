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

function Home({ isDarkMode }) {
  return (
    <div className='w-full  background absolute inset-0' >
      <Hero />
      <FeatureSection/>
      <EventCard2/>
      <Cat/>
      
      
      <BlogSection />
      <AboutSection title={"Championing Trade and Investment"} img={"https://www.worldfinance.com/wp-content/uploads/2020/05/HYCM_Trading_mobile-632x474.jpg"} desc={"Glitter Trading is dedicated to advancing the trade and investment landscape of East Africa. We believe in the power of connectivity and collaboration, forging partnerships that transcend borders and connect businesses with opportunities across the continent and beyond. Our strategic focus on promoting East African trade aligns with our vision of fostering economic prosperity and sustainable development in the region."}/>
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
