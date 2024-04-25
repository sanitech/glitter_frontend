import React from "react";
import { Link } from "react-router-dom";

function Cat() {
  return (
    <div className="">
      <div class="overflow-hidden bg-[url(https://www.chapiteau-monaco.com/wp-content/uploads/slide-07.jpg)] bg-cover bg-top bg-no-repeat">
        <div class="bg-black/80 p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="w-[84rem] m-auto">
            <h2 class=" text-2xl font-bold text-white sm:text-3xl md:text-5xl">
              Find Your Perfect Event!
            </h2>

            <p class="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
              Start exploring today and create memories that last a lifetime.
              Let every moment be a chapter in your story of adventure and
              discovery!
            </p>

            <div class="mt-4 sm:mt-8">
              <Link
                to="/events"
                class="inline-block rounded-full bg-orange-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-orange-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Discover Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cat;
