import React from "react";
import aboutUsImg from "../../assets/images/about.png";
const AboutHero = () => {
  return (
    <div>
      <div class="relative background">
        <div
          className={`h-screen bg-no-repeat bg-cover bg-center`}
          style={{
            backgroundImage: `url(${aboutUsImg})`,
            backgroundPosition: "center",
            overflow: "hidden",
          }}
        >
          <div class="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center md:w-[84rem] mx-auto h-screen px-4 sm:px-6 lg:px-8 py-32 md:py-20 ">
            <div>
              <h1 class="block text-3xl font-bold text-gray-100 sm:text-4xl lg:text-6xl lg:leading-tight">
                Your Growth is Our <span class="text-orange-500">Passion</span>
              </h1>
              <p class="mt-3 text-lg text-gray-200 ">
                Passionate about nurturing growth and realizing dreams through
                actionable steps.
              </p>

              <div class="mt-7 grid gap-3 w-full sm:inline-flex">
                <a
                  class="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-orange-500 text-black hover:bg-orange-500 disabled:opacity-50 disabled:pointer-events-none"
                  href="#"
                >
                  Explore now
                  <svg
                    class="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
