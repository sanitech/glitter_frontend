import React from "react";

const CountCard = ({counter}) => {
  return (
    <div>
      <div>
        <h4 class="text-lg sm:text-xl font-semibold text-gray-800 ">
          {counter.title}
        </h4>
        <p class="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-gray-900">
         {counter.count}
        </p>
        <p class="mt-1 text-gray-500 dark:text-neutral-500">
          {counter.description}
        </p>
      </div>
    </div>
  );
};

export default CountCard;
