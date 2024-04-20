import React from 'react'
import Partner from '../Components/OurPartner/Partner'
import Faq from '../Components/FAQ/Faq'
import HeroTextOnly from '../Components/Hero/HeroTextOnly'
import Footer from '../Components/Footer/Footer'

const Organizers = () => {
  return (
    <div className="absolute inset-0">

    <HeroTextOnly heroText="The Blog" subText="See how game-changing companies are making the most of every engagement with Preline." catBtnTitle="View All" link="/blog"  />
      <Partner/>
      <Faq/>
      <Footer />

    </div>
  )
}

export default Organizers
