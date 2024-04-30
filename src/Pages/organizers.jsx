import React from 'react'
import Partner from '../Components/OurPartner/Partner'
import Faq from '../Components/FAQ/Faq'
import HeroTextOnly from '../Components/Hero/HeroTextOnly'
import Footer from '../Components/Footer/Footer'

const Organizers = () => {
  return (
    <div className="absolute inset-0">

    <HeroTextOnly heroText="Powering Unforgettable Events, Together" subText="Collaborate, Create, Celebrate: Where Every Event Begins with Partnership." catBtnTitle="View All Partners" link="#organizers" backImg={"https://thumbs.dreamstime.com/z/marketing-promotional-campaign-flat-vector-illustration-pr-management-advertisement-announcement-broadcast-concept-big-158934658.jpg"} />
      <Partner/>
      <Faq/>
      <Footer />

    </div>
  )
}

export default Organizers
