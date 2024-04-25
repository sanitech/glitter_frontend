import React from 'react'

const Faq = () => {
  return (
    <div>
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div class="grid md:grid-cols-5 gap-10">
        <div class="md:col-span-2">
          <div class="max-w-xs">
            <h2 class="text-2xl font-bold md:text-4xl md:leading-tight ">Frequently<br/>asked questions</h2>
            <p class="mt-1 hidden md:block text-gray-600 ">Answers to the most frequently asked questions.</p>
          </div>
        </div>
        
    
        <div class="md:col-span-3">
          <div class="hs-accordion-group divide-y divide-gray-200 dark:divide-neutral-700">
            <div class="hs-accordion pb-3 active" id="hs-basic-with-title-and-arrow-stretched-heading-one">
              <button class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 " aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
              How to book?
                <svg class="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                <svg class="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>
              </button>
              <div id="hs-basic-with-title-and-arrow-stretched-collapse-one" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">
                <p class="text-gray-600 ">
                To book our services, simply fill out the booking form on our website and our team will get back to you within 24 hours.
                </p>
              </div>
            </div>
    
            <div class="hs-accordion pt-6 pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-two">
              <button class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 " aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two">
              What are the payment options?
                <svg class="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                <svg class="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>
              </button>
              <div id="hs-basic-with-title-and-arrow-stretched-collapse-two" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two">
                <p class="text-gray-600 ">
                We accept all major credit cards and PayPal for payment. You can choose your preferred payment method during the booking process.
                </p>
              </div>
            </div>
    
            <div class="hs-accordion pt-6 pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-three">
              <button class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 " aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three">
              What is your cancellation policy?
                <svg class="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                <svg class="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>
              </button>
              <div id="hs-basic-with-title-and-arrow-stretched-collapse-three" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three">
                <p class="text-gray-600 ">
                If you need to cancel your booking, please notify us at least 48 hours in advance to receive a full refund. Cancellations made within 48 hours may be subject to a cancellation fee.
                </p>
              </div>
            </div>
    
            <div class="hs-accordion pt-6 pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-four">
              <button class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 " aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four">
              Do you offer refunds?
                <svg class="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                <svg class="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>
              </button>
              <div id="hs-basic-with-title-and-arrow-stretched-collapse-four" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four">
                <p class="text-gray-600 ">
                Refunds are available for cancellations made at least 48 hours in advance. Please refer to our cancellation policy for more details.
                </p>
              </div>
            </div>
    
            <div class="hs-accordion pt-6 pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-five">
              <button class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 " aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five">
              Can I modify my booking?
                <svg class="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                <svg class="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>
              </button>
              <div id="hs-basic-with-title-and-arrow-stretched-collapse-five" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five">
                <p class="text-gray-600 ">
                Yes, you can modify your booking by contacting our customer support team. Please note that modifications are subject to availability.
                </p>
              </div>
            </div>
    
           
          </div>
          
        </div>
        
      </div>
     
    </div>
    </div>
  )
}

export default Faq
