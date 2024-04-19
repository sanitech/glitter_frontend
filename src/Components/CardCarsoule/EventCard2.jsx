import React from "react";
import EventSingleCard from "./EventSingleCard";

const EventCard2 = () => {
  return (
    <div className="w-[84rem] m-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-14">
      <div className="py-6">

        <div className="font-bold text-4xl uppercase ">Upcoming Events</div>
        <div className="font-medium mt-1 text-xl"> events</div>
      </div>
      <div className="flex gap-4 flex-col md:flex-row justify-center ">

      <EventSingleCard scale={"md:scale-100"} merge={"md:-mr-24"} zindex={"z-10"}/>
      <EventSingleCard scale={"md:scale-110"} merge={0} zindex={"md:z-50"}/>
      <EventSingleCard scale={"md:scale-100"} merge={"md:-ml-24"} zindex={"z-10"}/>

        
      </div>
    </div>

  );
};

export default EventCard2;
