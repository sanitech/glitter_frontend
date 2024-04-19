import React from "react";
import EventCountDown from "./EventCountDown";
// import './EventHero.css'
function EventHero() {
  return (
    <div className="h-full  bg-[url('https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80')]">
      <div className="overplay">
        <div className="bg-blend-overlay w-full h-screen bg-gradient-to-r from-gray-900/40 to-gray-500/20 py-20 px-20 ">
          <div className="flex flex-col justify-center h-full md:w-5/6 w-full  m-auto">
            <div className="">
              <p>
                <span className="text-gray-50  font-bold">
                  Are you{" "}
                  <strong className="text-gray-600 font-bold">ready</strong> to
                  attend?
                </span>
              </p>
              <h1 className="block text-3xl font-bold md:w-3/5 w-full text-gray-50 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
                Start your journey with{" "}
                <span className="text-gray-50 font-bold">Preline</span>
              </h1>
              <div className="flex gap-5 mt-4">
                <div className="flex flex-row gap-3 items-center text-gray-50 text-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-geo-alt"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                  </svg>
                  <div>India</div>
                </div>
                <div className="flex flex-row gap-3 items-center text-gray-50 text-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-calendar3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857z" />
                    <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                  </svg>
                  <div>India</div>
                </div>
              </div>
              <EventCountDown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventHero;
