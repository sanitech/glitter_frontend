import React, { useEffect, useState } from "react";
import "./EventTopic.css";
import backImage from "../../assets/images/blue.png";
import backImage2 from "../../assets/images/blue2.png";
import SliderContainer from "./SliderContainer";
function EventTopic({ selectedEvent }) {
  const { eventGoals } = selectedEvent && selectedEvent;

  return (
    <div className="event-topic relative" id="topic">
      <div
        className=" h-full "
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://th.bing.com/th/id/R.17502cb38ba111f3a64fac3e24fe2def?rik=ZGzhlgoUXnLYjQ&pid=ImgRaw&r=0")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="md:w-[84rem] m-auto grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="event-header col-span-2 ">
            {/* <div className="event-header-title z-40">Topic</div> */}
            {/* <div className="event-header-subtitle unelectable pos-absolute">
              Event Topic
            </div> */}
            <div className="flex flex-col justify-center py-12 text-gray-100 h-screen">
              <div className="font-bold text-xl uppercase py-2">
                About Event
              </div>
              <div className="font-medium text-lg">
                {selectedEvent?.eventDescription}
              </div>
              <div className="font-bold text-xl uppercase mt-10 py-2">
                Event Goal
              </div>
              <div className="font-medium text-lg">
                <ul className=" flex flex-col gap-1">
                  {eventGoals?.map((event) => {
                    return (
                      <div className="flex gap-2 items-start ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-gem"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6zm11.386 3.785-1.806-2.41-.776 2.413zm-3.633.004.961-2.989H4.186l.963 2.995zM5.47 5.495 8 13.366l2.532-7.876zm-1.371-.999-.78-2.422-1.818 2.425zM1.499 5.5l5.113 6.817-2.192-6.82zm7.889 6.817 5.123-6.83-2.928.002z" />
                        </svg>
                        <span>{event}</span>
                      </div>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          <SliderContainer event={selectedEvent} />
          {/* <div className="event-topic-container">

                <div className="event-cards-container">
                    <div className="event-card-one">

                        <div className="event-card">
                            <div className="event-topic-count">01</div>
                            <span>project introduction</span>
                        </div>
                        <div className="event-card">
                            <div className="event-topic-count">01</div>
                            <span>project introduction</span>
                        </div>
                        <div className="event-card">
                            <div className="event-topic-count">01</div>
                            <span>project introduction</span>
                        </div>
                        <div className="event-card">
                            <div className="event-topic-count">01</div>
                            <span>project introduction</span>
                        </div>
                    </div>

                    <div className="event-card-two">

                        <div className="event-card">
                            <div className="event-topic-count">01</div>
                            <span>project introduction</span>
                        </div>
                        <div className="event-card">
                            <div className="event-topic-count">01</div>
                            <span>project introduction</span>
                        </div>
                        <div className="event-card">
                            <div className="event-topic-count">01</div>
                            <span>project introduction</span>
                        </div>
                    </div>
                </div>
                <div className="event-center-content">

                    <div className="event-topic-image">
                        <img src="https://ithemeslab.com/sitetemplate/fizcon/images/resource/topic-girl.png" alt="event-img" />
                    </div>

                    <div className="event-center">
                        <div className="event-bg-img"><img src={backImage} alt="" /></div>
                        <div className="event-bg-img"><img src={backImage2} alt="" /></div>
                    </div>
                </div>
            </div> */}
        </div>
      </div>
    </div>
  );
}

export default EventTopic;
