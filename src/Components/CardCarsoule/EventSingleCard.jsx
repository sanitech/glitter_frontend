import React, { useEffect, useState } from "react";

const EventSingleCard = ({ scale, merge, zindex, event }) => {

  const targetDate = new Date(event?.eventDeadlines* 1000);
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
      <div class={`e-card w-96  md:${scale} md:${merge} md:${zindex})]`} style={{backgroundImage: `url(${event?.banner})`}}>
        <section class="top"></section>
        <div class="event-info">
          {
            countDownTime?.days ==undefined ?(
              <p class="price z-20 capitalize text-red-500">event timeOut</p>
            ):
            <p class="price z-20 text-gray-900"> {`${countDownTime?.days} : ${countDownTime?.hours<10 ? `0${countDownTime?.hours}` : countDownTime?.hours} : ${countDownTime?.minutes<10 ? `0${countDownTime?.minutes}` : countDownTime?.minutes} : ${countDownTime?.seconds} ` }</p> 

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
      </div>
    </div>
  );
};

export default EventSingleCard;
