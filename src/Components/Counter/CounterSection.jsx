import React from 'react'

function CounterSection() {
  return (
    <div>
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div class="grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-4 lg:gap-8">
       
        <div>
          <h4 class="text-lg sm:text-xl font-semibold text-gray-800 dark:text-neutral-200">Accuracy rate</h4>
          <p class="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-gray-900">99.95%</p>
          <p class="mt-1 text-gray-500 dark:text-neutral-500">in fulfilling orders</p>
        </div>
        
    
       
        <div>
          <h4 class="text-lg sm:text-xl font-semibold text-gray-800 dark:text-neutral-200">Startup businesses</h4>
          <p class="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-gray-900">2,000+</p>
          <p class="mt-1 text-gray-500 dark:text-neutral-500">partner with Preline</p>
        </div>
       
        <div>
          <h4 class="text-lg sm:text-xl font-semibold text-gray-800 dark:text-neutral-200">Happy customer</h4>
          <p class="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-gray-900">85%</p>
          <p class="mt-1 text-gray-500 dark:text-neutral-500">this year alone</p>
        </div>

        <div>
          <h4 class="text-lg sm:text-xl font-semibold text-gray-800 dark:text-neutral-200">Happy customer</h4>
          <p class="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-gray-900">85%</p>
          <p class="mt-1 text-gray-500 dark:text-neutral-500">this year alone</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CounterSection
