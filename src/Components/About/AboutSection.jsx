import React from "react";

function AboutSection({ title, desc, img, list, note }) {
  return (
    <div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
          <div>
            <img className="rounded-xl" src={img} alt="Image Description" />
          </div>

          <div className="mt-5 sm:mt-10 lg:mt-0">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2 md:space-y-4">
                <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 ">
                  {title}
                </h2>
                <p className="text-gray-500 dark:text-neutral-500">{desc}</p>
              </div>
              <ul className="space-y-2 sm:space-y-4">
                {list &&
                  list.map((item) => {
                    return (
                      <li className="flex space-x-3">
                        <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-orange-100 text-orange-500 ">
                          <svg
                            className="flex-shrink-0 size-3.5"
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
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>

                        <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                          <span className="font-medium">{item}</span> 
                        </span>
                      </li>
                    );
                  })}

               
              </ul>

              <div className="text-gray-500">
                {note}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
