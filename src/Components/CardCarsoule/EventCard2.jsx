import React from "react";
import EventSingleCard from "./EventSingleCard";
import { eventData } from "../../Data";

const EventCard2 = () => {
  const events = eventData.slice(0, 3);
  return (
    <div className="w-fit md:w-[84rem] m-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-14">
      <div className="py-6">
        <div className="font-bold text-4xl uppercase ">Upcoming Events</div>
        <div className="font-medium mt-1 text-xl"> events</div>
      </div>
      <div className="flex gap-4 flex-col md:flex-row justify-center w-fit ">
        {events.map((event) => (
          <EventSingleCard
            scale={"md:scale-100"}
            merge={"md:-mr-24"}
            zindex={"z-10"}
            event={event}
          />
        ))}
      </div>
    </div>
  );
};

export default EventCard2;
