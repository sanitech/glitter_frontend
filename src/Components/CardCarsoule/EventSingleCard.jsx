import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EventSingleCard = ({ scale, merge, zindex, event }) => {

  const targetDate = new Date(event?.eventDeadlines * 1000);
  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();
    let timeLeft = {};


    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [countDownTime, setCountDownTime] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setCountDownTime(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });
  return (
    <div className="w-fit">
      <Link to={`/events/${event?.eventId}`} class={`e-card w-96  md:${scale} md:${merge} md:${zindex})]`} style={{ backgroundImage: `url(${event?.banner})` }}>
        <section class="top"></section>
        <div class="event-info">
          {
            countDownTime?.days == undefined ? (
              <p class="price z-20 capitalize text-gray-900 bg-red-100/80 text-2xl py-3 px-4 backdrop-blur-sm">Event expired</p>
            ) :
              <p class="price z-20 text-gray-900 gap-2">

                <div className="flex flex-col items-center bg-white/30 py-3 px-2 backdrop-blur-lg uppercase">
                  <span className="font-bold text-xl">{countDownTime?.days<10 ? `0${countDownTime?.days}` : countDownTime?.days}</span>
                  <span className="text-sm" > {countDownTime?.days == 1 ? "Day" : "Days"}</span>
                </div>
                <div className="flex flex-col items-center bg-white/30 py-3 px-2 backdrop-blur-lg uppercase">
                  <span className="font-bold text-xl"> {countDownTime?.hours<10 ? `0${countDownTime?.hours}` : countDownTime?.hours}</span>
                  <span className="text-sm" > {countDownTime?.hours == 1 ? "Hour" : "Hours"}</span>
                </div>
                <div className="flex flex-col items-center bg-white/30 py-3 px-2 backdrop-blur-lg uppercase">
                  <span className="font-bold text-xl">{countDownTime?.minutes<10 ? `0${countDownTime?.minutes}` : countDownTime?.minutes}</span>
                  <span className="text-sm" >{countDownTime?.minutes == 1 ? "Minute" : "Minutes"}</span>
                </div>
                <div className="flex flex-col items-center bg-white/30 py-3 px-2 backdrop-blur-lg uppercase">
                  <span className="font-bold text-xl"> {countDownTime?.seconds<10 ? `0${countDownTime?.seconds}` : countDownTime?.seconds}</span>
                  <span className="text-sm" > {countDownTime?.seconds == 1 ? "Second" : "Seconds"}</span>
                </div>

              </p>

          }
          <p class="title line-clamp-1">{event.eventName}</p>

          <div class="additional-info">
            <p class="info line-clamp-1">
              <i class="fas fa-map-marker-alt "></i>
              {
                event.eventLocation?.location
              }
            </p>
            <p class="info">
              <i class="fas fa-calendar-alt"></i>
              {
                event.eventDate
              }
            </p>
          </div>
          <button class="action whitespace-nowrap">View Details</button>
        </div>
      </Link>
    </div>
  );
};

export default EventSingleCard;
