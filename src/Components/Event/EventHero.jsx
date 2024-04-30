import React, { useEffect, useState } from "react";
import EventCountDown from "./EventCountDown";
import { eventData } from "../../Data";
import image4 from "../../assets/images/usa.gif";  
import { Link } from "react-router-dom";

// import './EventHero.css'
function EventHero({selectedEvent}) {
 
  const event = selectedEvent[0]
  console.log(`FETCH EVENT `, event)
  console.log(`bro`, selectedEvent?.eventDeadlines)
  const targetDate = new Date(selectedEvent?.eventDeadlines * 1000);
  return (
    <div className={`h-full `} style={{backgroundImage: `url(${selectedEvent?.eventLocation?.image})`, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover', overflow:'hidden'}}>
      {/* <div className="overplay"> */}
        {/* <div className="bg-blend-overlay w-full h-screen bg-gradient-to-r from-gray-900/10 to-gray-500/10 py-20 px-20 "> */}
        <div className="bg-blend-overlay w-full  h-screen bg-gradient-to-r from-gray-900/80 to-gray-500/50 py-20 px-20 ">
          <div className="flex flex-col justify-center h-full md:w-5/6 w-full  m-auto">
            <div className="">
              <p>
                <span className="text-gray-50  font-bold">
                  Are you{" "}
                  <a href={`#topic`} className="text-orange-600 font-bold">ready</a> to
                  attend?
                </span> 
              </p>
              <h1 className="block text-3xl font-bold md:w-3/5 w-full text-gray-50 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white uppercase">
                {selectedEvent?.eventName}
                </h1>
                <div className="text-gray-900 font-bold rounded-full w-fit py-1 px-2 text-sm bg-orange-500">{selectedEvent?.eventType}</div>
              <div className="flex gap-5 mt-4 flex-col md:flex-row">
                <div className="flex flex-row gap-3 items-center text-gray-50 text-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-geo-alt"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                  </svg>
                  <div>{selectedEvent?.eventLocation?.location}</div>
                </div>
                <div className="flex flex-row gap-3 items-center text-gray-50 text-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-calendar3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z" />
                    <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                  </svg>
                  <div>{selectedEvent?.eventDate}</div>
                </div>
              </div>
              <EventCountDown targetDate={targetDate}/>
            </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default EventHero;
