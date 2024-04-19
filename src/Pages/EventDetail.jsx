import React from "react";
import EventTopic from "../Components/Event/EventTopic";
import Partner from "../Components/OurPartner/Partner";
import EventLocation from "../Components/Event/EventLocation";
import EventPricing from "../Components/Event/EventPricing";
import EventPricingSection from "../Components/Event/EventPriceingSection";
import EventHero from "../Components/Event/EventHero";
import EventSponserPrice from "../Components/Event/EventSponserPrice";
import Footer from "../Components/Footer/Footer";
import Faq from "../Components/FAQ/Faq";
// import EventPricing from "../Components/Event/EventPricing";

function EventDetail() {
  return (
    <div className="bg-gray-950 absolute inset-0 z-0">
     <EventHero/>
      <EventTopic />
    <EventSponserPrice/>
      <Partner />
      <EventLocation />
      <Faq/>
      <Footer/>

    </div>
  );
}

export default EventDetail;
