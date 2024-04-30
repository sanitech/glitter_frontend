import React from "react";

function HeroTextOnly({heroText, subText, catBtnTitle, link,  backImg}) {
  return (
    <div>
    <div className={` h-full`} style={{backgroundImage: `url(${backImg})`, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover', overflow:'hidden'}}>
    {/* <div className="overplay"> */}
    <div className="bg-blend-overlay w-full  bg-gradient-to-b from-gray-900/90 to-gray-900/90 py-20 px-20 ">

        {/* <div class="bg-gradient-to-b from-amber-400/[.15] via-transparent"> */}
          <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
            <div class="max-w-4xl text-center mx-auto">
              <h1 class="block font-medium text-gray-50 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                {heroText}
              </h1>
            </div>

            <div class="max-w-3xl text-center mx-auto">
              <p class="text-lg text-gray-50">
                {subText}
              </p>
            </div>

            <div class="text-center">
              <a
                class="inline-flex justify-center items-center gap-x-3 text-center bg-orange-500  shadow-lg shadow-transparent hover:shadow-orange-500/50 border border-transparent text-black text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800"
                // href="#involve"
                href={link}
              >
                {catBtnTitle}
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
        {/* </div> */}
      </div>
    </div>
    </div>
  );
}

export default HeroTextOnly;
