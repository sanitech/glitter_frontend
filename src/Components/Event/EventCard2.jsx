import React from 'react'
import bui from '../../assets/images/blue.png'
import bui2 from '../../assets/images/blue2.png'

function EventCard2() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2'  style={{paddingTop: "100vh"}}>

        <div className="w-full h-full magicpattern"  style={{backgroundImage: `url(https://th.bing.com/th/id/OIP.7qyc8WgQPG7sZaRjqoQzRgHaLH?rs=1&pid=ImgDetMain)`, backgroundPosition:'center', overflow:'hidden'}}>
            {/* <img src={bui2} alt="" className='w-full h-full object-cover'  style={{backgroundImage: `url(${bui})`, backgroundPosition:'center', overflow:'hidden'}}/> */}
        </div>

        <div className="w-full h-full">
            <div className="font-bold">Design & Development Events</div>
            <div className="font-bold  text-4xl">Pixel Pioneers Belfast 2019</div>
            <div className="font-medium text-xl">Pixel Pioneers, a one-day conference for web and UX designers and front-end developers, will take place on the 23rd of November 2019 in Belfast.</div>
        </div>
      
    </div>
  )
}

export default EventCard2
