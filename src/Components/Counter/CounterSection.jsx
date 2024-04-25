import React from "react";
import CountCard from "./CountCard";
import { eventCounterData } from "../../Data";

function CounterSection() {
  return (
    <div>
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto ">
        <div class="grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-8">
          {eventCounterData.map((counter) => {
           return <CountCard counter={counter} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default CounterSection;
