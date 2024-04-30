import React,{useState, useEffect} from 'react'
import SponsorsCard from './SponsersCard';
import EventPricing from './EventPricing';

const EventSponserPrice = ({selectedEvent}) => {
    const [sponsors, setSponsors] = useState([]);
  
    useEffect(() => {
      // Fetch event data (replace this with your actual data fetching logic)
      const fetchEventData = async () => {
        try {
  
          // Extract partners array from eventData and set it to state
          if (selectedEvent && selectedEvent.sponsorshipPartnership && selectedEvent.sponsorshipPartnership.sponsors) {
            setSponsors(selectedEvent.sponsorshipPartnership.sponsors);
          }
         
        } catch (error) {
          console.error('Error fetching event data:', error);
        }
      };
  
      fetchEventData();
    }, []);
    console.log('Event data sponsor', sponsors)
  
    
    return (
        <div className=' md:w-[84rem] m-auto py-10 px-8'>
            <div className="flex justify-end items-baseline mb-16">
                {/* <div className="font-bold text-4xl z-30 text-gray-500">Organizers</div> */}
                <div className="uppercase text-4xl md:text-9xl font-bold  text-gray-100  unselectable">Sponsorship</div>

            </div>

                {/* <div class="bg-gradient-to-b from-pink-100 to-purple-200"> */}
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 transition-all duration-10">
                {
                    sponsors?.map((sponsor, index) => {
                        return(
                            <EventPricing sponsor={sponsor} />
                        )
                    })
                }
                   


                {/* </div> */}
            </div>
        </div>
    )
}

export default EventSponserPrice
