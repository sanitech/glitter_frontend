import React from "react";

function Cat() {
  return (
    <div className="">
      <div class="overflow-hidden bg-[url(https://www.chapiteau-monaco.com/wp-content/uploads/slide-07.jpg)] bg-cover bg-top bg-no-repeat">
        <div class="bg-black/80 p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="w-[84rem] m-auto">
            <h2 class=" text-2xl font-bold text-white sm:text-3xl md:text-5xl">
              Latest Shirts
            </h2>

            <p class="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore officia corporis quasi doloribus iure architecto quae
              voluptatum beatae excepturi dolores.
            </p>

            <div class="mt-4 sm:mt-8">
              <a
                href="#"
                class="inline-block rounded-full bg-orange-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Yours Today
              </a>
            </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Cat;
