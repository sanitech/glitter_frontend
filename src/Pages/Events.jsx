import React from "react";
import EventHero from "../Components/Event/EventHero";
import EventCountDown from "../Components/Event/EventCountDown";
import Hero from "../Components/Hero/Hero";
import EventCard from "../Components/Event/EventCard";
import EventPricing from "../Components/Event/EventPricing";
import EventLocation from "../Components/Event/EventLocation";
import EventPricingSection from "../Components/Event/EventPriceingSection";
import EventCard2 from "../Components/Event/EventCard2";
import EventLis from "../Components/Event/EventLis";
import Faq from "../Components/FAQ/Faq";

function Events() {
  return (
    <div className="absolute inset-0">
      <EventHero />
      <EventLis/>
      <Faq />
     
    </div>
  );
}

export default Events;
