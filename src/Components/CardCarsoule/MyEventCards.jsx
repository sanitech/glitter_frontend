import React from "react";

function MyEventCards() {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="pt-4 flex gap-4 justify-center events-container w-10/12">
        <div className="px-4 py-7 bg-gray-700 text-gray-100">
          <div className="font-medium text-cyan-400">Expo</div>
          <div className="font-bold capitalize text-1xl">
            {" "}
            event titles by date
          </div>

          <div className="font-bold text-lg">Live Event</div>
          <div className="font-medium">00:00 - 00:00</div>
          <div className="bg-gray-800 py-5 px-8 text-gray-100 rounded-full border-gray-700">
            Event Detail
          </div>
        </div>
        <div className="px-4 py-7 bg-gray-700 text-gray-100">
          <div className="font-medium text-cyan-400">Expo</div>
          <div className="font-bold capitalize text-1xl">
            {" "}
            event titles by date
          </div>

          <div className="font-bold text-lg">Live Event</div>
          <div className="font-medium">00:00 - 00:00</div>
          <div className="bg-gray-800 py-5 px-8 text-gray-100 rounded-full border-gray-700">
            Event Detail
          </div>
        </div>
        <div className="px-4 py-7 bg-gray-700 text-gray-100">
          <div className="font-medium text-cyan-400">Expo</div>
          <div className="font-bold capitalize text-1xl">
            {" "}
            event titles by date
          </div>

          <div className="font-bold text-lg">Live Event</div>
          <div className="font-medium">00:00 - 00:00</div>
          <div className="bg-gray-800 py-5 px-8 text-gray-100 rounded-full border-gray-700">
            Event Detail
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyEventCards;
