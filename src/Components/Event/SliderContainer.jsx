import React from 'react'
import './EventSliderContainer.css'
function SliderContainer() {
    return (
        <div class="void" id="void" >
            <div class="crop">
                <ul id="card-list">
                    <li><div class="card"><a href=""><span class="model-name backdrop-blur-xl">Gretel-ACTGAN</span><span>Model for generating highly dimensional, mostly numeric, tabular data</span></a></div></li>
                    <li><div class="card"><a href=""><span class="model-name backdrop-blur-sm">Gretel-ACTGAN</span><span>Model for generating highly dimensional, mostly numeric, tabular data</span></a></div></li>
                    <li><div class="card"><a href=""><span class="model-name backdrop-blur-sm">Gretel-ACTGAN</span><span>Model for generating highly dimensional, mostly numeric, tabular data</span></a></div></li>
                    <li><div class="card"><a href=""><span class="model-name backdrop-blur-sm">Gretel-ACTGAN</span><span>Model for generating highly dimensional, mostly numeric, tabular data</span></a></div></li>
                    <li><div class="card"><a href=""><span class="model-name backdrop-blur-sm">Gretel-ACTGAN</span><span>Model for generating highly dimensional, mostly numeric, tabular data</span></a></div></li>
                    <li><div class="card"><a href=""><span class="model-name backdrop-blur-sm">Gretel-ACTGAN</span><span>Model for generating highly dimensional, mostly numeric, tabular data</span></a></div></li>
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
