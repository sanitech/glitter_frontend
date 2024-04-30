import React from "react";
import { Link } from "react-router-dom";
import EventCard from "./EventCard";
import eventBanner from "../../assets/images/event-banner.jpg";
import { eventData } from "../../Data";
const EventLis = () => {
  return (
    <div className="md:w-[84rem] m-auto px-12 py-16 grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className=" flex-col md:col-span-3 py-5">
        {eventData.map((event) => {
          console.log(event.eventDate);
          const eventDate = event.eventDate?.split(",");
          return <EventCard event={event} eventDate={eventDate} />;
        })}
      </div>
      <div className="event-banner ">
        <img src={eventBanner} alt="" className="sticky md:top-36" />
      </div>
    </div>
  );
};

export default EventLis;
