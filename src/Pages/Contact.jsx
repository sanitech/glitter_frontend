import React from 'react'
import ContactSection from '../Components/Contact/ContactSection'
import Faq from '../Components/FAQ/Faq'
import Footer from '../Components/Footer/Footer'

const Contact = () => {
  return (
    <div className='absolute inset-0'>
      <ContactSection/>
      <Faq/>
      <Footer/>

    </div>
  )
}

export default Contact
