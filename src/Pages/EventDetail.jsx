import React, { useEffect, useState } from "react";
import EventTopic from "../Components/Event/EventTopic";
import Partner from "../Components/OurPartner/Partner";
import EventLocation from "../Components/Event/EventLocation";
import EventPricing from "../Components/Event/EventPricing";
import EventPricingSection from "../Components/Event/EventPriceingSection";
import EventHero from "../Components/Event/EventHero";
import EventSponserPrice from "../Components/Event/EventSponserPrice";
import Footer from "../Components/Footer/Footer";
import Faq from "../Components/FAQ/Faq";
import { eventData } from "../Data";
import { useParams } from "react-router-dom";
// import EventPricing from "../Components/Event/EventPricing";

function EventDetail() {
  const [selectedEvent, setSelectedEvent] = useState([]);
  const { id } = useParams();

  function filterProgramAreaByTitle(titleToFilter) {
    // if (!eventData) {
    //   return []; // Return an empty array if eventData is null or undefined
    // }
    return eventData
      .filter((event) => event !== null && event !== undefined) // Filter out null and undefined values
      .filter((event) => event.eventId === titleToFilter);
  }

  console.log("ex", filterProgramAreaByTitle(id));
  useEffect(() => {
    setSelectedEvent(filterProgramAreaByTitle(id)[0]);
  }, [id]);
  return (
    <div className="bg-gray-950 absolute inset-0 z-0">
      <EventHero selectedEvent={selectedEvent} />
      <EventTopic selectedEvent={selectedEvent} />
      <EventSponserPrice selectedEvent={selectedEvent} />
      <Partner selectedEvent={selectedEvent} />
      <EventLocation selectedEvent={selectedEvent} />
      <Faq />
      <Footer />
    </div>
  );
}

export default EventDetail;
