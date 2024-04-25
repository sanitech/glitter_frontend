import React from "react";

const AboutHero = () => {
  return (
    <div>
      <div class="relative ">
        <div className="h-screen bg-no-repeat bg-cover bg-center  bg-[url('https://www.onboardhospitality.com/wp-content/uploads/2020/05/susacomma-lead-may13.png')]">
        <div className="bg-blend-overlay md:w-full h-screen bg-gradient-to-b from-gray-800/70 to-orange-100/10 py-20 px-20 ">

          <div class="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center md:w-[84rem] mx-auto h-screen px-4 sm:px-6 lg:px-8 py-32 md:py-20 ">
            <div>
              <h1 class="block text-3xl font-bold text-gray-100 sm:text-4xl lg:text-6xl lg:leading-tight">
                Start your journey with{" "}
                <span class="text-black">Glitter</span>
              </h1>
              <p class="mt-3 text-lg text-gray-200 ">
                Dreams Don't Come Real Just Because You Dream Them. It Is Hard
                Performance That Creates Change.
              </p>

              <div class="mt-7 grid gap-3 w-full sm:inline-flex">
                <a
                  class="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-900 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  href="#"
                >
                  Get started
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
                <a
                  class="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-900 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "
                  href="#"
                >
                  Contact sales team
                </a>
              </div>

            
            </div>

           
          </div>
          </div>
        </div>
     
      </div>
    </div>
  );
};

export default AboutHero;
