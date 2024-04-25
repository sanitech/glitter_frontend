import React from "react";
import "./EventCard.css";
import { Link } from "react-router-dom";
import kaze from "../../assets/images/kaz.jpg";
function EventCard({ event, eventDate }) {
  return (
    <div className="">
      <Link
        to={`/events/${event.eventId}`}
        class="flex bg-white transition hover:shadow-xl my-4"
      >
        <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">
          <time
            datetime="2022-10-10"
            class="flex items-center justify-between gap-4 text-sm font-bold uppercase text-gray-900"
          >
            <span>{eventDate[1]}</span>
            <span class="w-px flex-1 bg-gray-900/10"></span>
            <span>{`${eventDate[0]}`}</span>
          </time>
        </div>

        <div class="hidden sm:block sm:basis-56">
          <img
            alt=""
            src={event?.banner}
            class="aspect-square h-full w-full object-cover"
          />
        </div>

        <div class="flex flex-1 flex-col justify-between">
          <div class="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
            <a href="#">
              <h3 class="font-bold uppercase text-gray-900">
                {event.eventName}
              </h3>
            </a>

            <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
              {event.eventDescription}
            </p>
          </div>

          <div class="sm:flex sm:items-end sm:justify-end">
            <a
              href="#"
              class="block bg-orange-500 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
            >
              Read More
            </a>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default EventCard;
