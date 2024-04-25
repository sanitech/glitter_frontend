import React from 'react'
import './EventSliderContainer.css'
function SliderContainer({event}) {
  const { eventTopics } = event && event;

    return (
        <div class="void" id="void" className="md:col-span-3">
            <div class="crop">
                <ul id="card-list" className='card-list'>
                {
                    eventTopics?.map((eventTopic) => {
                        return(
                            <li><div class="card"><a href=""><span class="model-name backdrop-blur-xl font-bold text-black">{eventTopic}</span></a></div></li>
                        )
                    })
                }
                    {/* <li><div class="card"><a href=""><span class="model-name backdrop-blur-sm">Gretel-ACTGAN</span><span>Model for generating highly dimensional, mostly numeric, tabular data</span></a></div></li> */} */}
                </ul>
                <div class="last-circle"></div>
                <div class="second-circle"> </div>
            </div>
            <div class="mask"></div>
            <div class="center-circle font-bold text-4xl uppercase">Topics</div>
        </div>
    )
}

export default SliderContainer
