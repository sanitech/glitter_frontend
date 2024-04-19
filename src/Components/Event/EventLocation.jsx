import React from "react";

function EventLocation() {
    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto relative">
            <div className="flex justify-between items-baseline mb-28">
                <div className="font-bold text-4xl z-30">Location</div>
                <div className="uppercase text-8xl font-bold  text-gray-100 event-header-subtitle unselectable">
                    Get Direction
                </div>

            </div>

            <div className="flex gap-20 flex-col md:flex-row">
                <div className="md:w-1/3 flex flex-col gap-10">
                    <div className=" shadow-lg relative py-12 px-10">
                        <div className="card-title font-bold text-2xl mb-4">Conference Location</div>
                        <div className="card-disc font-medium text-gray-600">Washington State Convention Center 705 Pike Street ,Seattle, WA 98101 Phone: 206-694-5000</div>
                        <div className="card-icon absolute top-[-20px] right-10 rounded-full bg-gray-300 p-5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                        </div>
                    </div>
                    <div className=" shadow-lg relative py-12 px-10">
                        <div className="card-title font-bold text-2xl  mb-4">Conference Location</div>
                        <div className="card-disc font-medium text-gray-600">Washington State Convention Center 705 Pike Street ,Seattle, WA 98101 Phone: 206-694-5000</div>
                        <div className="card-icon absolute top-[-20px] right-10 rounded-full bg-gray-300 p-5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                        </div>
                    </div>
                    <div className=" shadow-lg relative py-12 px-10 flex-1">
                        <div className="card-title font-bold text-2xl  mb-4">Conference Location</div>
                        <div className="card-disc font-medium text-gray-600">Washington State Convention Center 705 Pike Street ,Seattle, WA 98101 Phone: 206-694-5000</div>
                        <div className="card-icon absolute top-[-20px] right-10 rounded-full bg-gray-300 p-5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                        </div>
                    </div>

                </div>
                <div className="w-2/3 flex">
                    <img src="https://th.bing.com/th/id/R.c15f4aa6bd53276df7b6a7d3b36ed608?rik=QqapnP3LkiCWHA&pid=ImgRaw&r=0" alt="event country image" className="flex-1 w-3/4 object-cover;"/>
                    <iframe className="flex-1" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.750532540426!2d39.26152277116393!3d8.523583910335548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b21a1da721bfb%3A0x72605c18312a187e!2sIX%20IT%20and%20Marketing%20solutions!5e0!3m2!1sen!2set!4v1712909357756!5m2!1sen!2set"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                </div>
            </div>
        </div>
    );
}

export default EventLocation;
