import React from "react";
import OurClient from "./OurClient";

function Partner() {
    return (
        <div className="bg-gray-950">
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto relative">

                <div className="flex justify-between items-baseline mb-28 gap-4">

                    <div className="font-bold text-4xl z-30 text-gray-500">Organizers</div>
                    <div className="uppercase text-4xl md:text-9xl font-bold  text-gray-100  unselectable">our partners</div>

                </div>
                <OurClient/>
            </div>
        </div>
    );
}

export default Partner;
