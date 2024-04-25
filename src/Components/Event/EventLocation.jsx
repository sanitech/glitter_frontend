import React from "react";

function EventLocation({ selectedEvent }) {
  const { eventLocation } = selectedEvent;
  console.log(eventLocation?.maps);
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto relative">
      <div className="flex justify-between items-baseline mb-28">
        <div className="font-bold text-4xl z-30">Location</div>
        <div className="uppercase text-4xl md:text-9xl font-bold  text-gray-100  unselectable">
          Get Direction
        </div>
      </div>

      <div className="flex gap-20 flex-col md:flex-row">
        <div className="md:w-1/3 flex flex-col gap-10">
          <div className=" shadow-lg relative py-12 px-10">
            <div className="card-title font-bold text-2xl mb-4">
              Conference Location
            </div>
            <div className="card-disc font-medium text-gray-600">
              {eventLocation?.location}
            </div>
            <div className="card-icon absolute top-[-20px] right-10 rounded-full bg-orange-500 p-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </div>
          </div>
          <div className=" shadow-lg relative py-12 px-10">
            <div className="card-title font-bold text-2xl  mb-4">
              Hotel Information
            </div>
            <div className="card-disc font-medium text-gray-600">
              {eventLocation?.hotel}
            </div>
            <div className="card-disc font-medium text-gray-600">
              {eventLocation?.phone}
            </div>
            <div className="card-icon absolute top-[-20px] right-10 rounded-full bg-orange-500 p-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-hospital"
                viewBox="0 0 16 16"
              >
                <path d="M8.5 5.034v1.1l.953-.55.5.867L9 7l.953.55-.5.866-.953-.55v1.1h-1v-1.1l-.953.55-.5-.866L7 7l-.953-.55.5-.866.953.55v-1.1zM13.25 9a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zM13 11.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25zm.25 1.75a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zm-11-4a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 3 9.75v-.5A.25.25 0 0 0 2.75 9zm0 2a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zM2 13.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25z" />
                <path d="M5 1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 1 1v4h3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1zm2 14h2v-3H7zm3 0h1V3H5v12h1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zm0-14H6v1h4zm2 7v7h3V8zm-8 7V8H1v7z" />
              </svg>
            </div>
          </div>
          <div className=" shadow-lg relative py-12 px-10 flex-1">
            <div className="card-title font-bold text-2xl  mb-4">
              Airport Information
            </div>
            <div className="card-disc font-medium text-gray-600">
              {eventLocation?.hotel}
            </div>

            <div className="card-icon absolute top-[-20px] right-10 rounded-full bg-orange-500 p-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-airplane"
                viewBox="0 0 16 16"
              >
                <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849m.894.448C7.111 2.02 7 2.569 7 3v4a.5.5 0 0 1-.276.447l-5.448 2.724a.5.5 0 0 0-.276.447v.792l5.418-.903a.5.5 0 0 1 .575.41l.5 3a.5.5 0 0 1-.14.437L6.708 15h2.586l-.647-.646a.5.5 0 0 1-.14-.436l.5-3a.5.5 0 0 1 .576-.411L15 11.41v-.792a.5.5 0 0 0-.276-.447L9.276 7.447A.5.5 0 0 1 9 7V3c0-.432-.11-.979-.322-1.401C8.458 1.159 8.213 1 8 1s-.458.158-.678.599" />
              </svg>
            </div>
          </div>
        </div>
        <div className="md:w-2/3 flex md:flex-row flex-col">
          <img
            src={selectedEvent.banner}
            alt="event country image"
            className="flex-1 w-full md:w-3/4 object-cover"
          />

          {eventLocation?.maps ? (
            <iframe
              className="flex-1"
              src={eventLocation?.maps}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          ) : (
            <iframe
              className="flex-1"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.750532540426!2d39.26152277116393!3d8.523583910335548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b21a1da721bfb%3A0x72605c18312a187e!2sIX%20IT%20and%20Marketing%20solutions!5e0!3m2!1sen!2set!4v1712909357756!5m2!1sen!2set"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          )}
        </div>
      </div>
    </div>
  );
}

export default EventLocation;
