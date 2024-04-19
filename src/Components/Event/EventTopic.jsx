import React from "react";
import "./EventTopic.css";
import backImage from "../../assets/images/blue.png";
import backImage2 from "../../assets/images/blue2.png";
import SliderContainer from "./SliderContainer";
function EventTopic() {
  return (
    <div className="event-topic relative">
      <div
        className=" h-full "
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://th.bing.com/th/id/R.17502cb38ba111f3a64fac3e24fe2def?rik=ZGzhlgoUXnLYjQ&pid=ImgRaw&r=0")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="w-[84rem] m-auto flex justify-between items-start">
          <div className="event-header">
            {/* <div className="event-header-title z-40">Topic</div> */}
            <div className="event-header-subtitle unselectable pos-absolute">
              Event Topic
            </div>
          </div>

          <SliderContainer />
          {/* <div className="event-topic-container">

                <div className="event-cards-container">
                    <div className="event-card-one">

                        <div className="event-card">
                            <div className="event-topic-count">01</div>
                            <span>project introduction</span>
                        </div>
                        <div className="event-card">
                            <div className="event-topic-count">01</div>
                            <span>project introduction</span>
                        </div>
                        <div className="event-card">
                            <div className="event-topic-count">01</div>
                            <span>project introduction</span>
                        </div>
                        <div className="event-card">
                            <div className="event-topic-count">01</div>
                            <span>project introduction</span>
                        </div>
                    </div>

                    <div className="event-card-two">

                        <div className="event-card">
                            <div className="event-topic-count">01</div>
                            <span>project introduction</span>
                        </div>
                        <div className="event-card">
                            <div className="event-topic-count">01</div>
                            <span>project introduction</span>
                        </div>
                        <div className="event-card">
                            <div className="event-topic-count">01</div>
                            <span>project introduction</span>
                        </div>
                    </div>
                </div>
                <div className="event-center-content">

                    <div className="event-topic-image">
                        <img src="https://ithemeslab.com/sitetemplate/fizcon/images/resource/topic-girl.png" alt="event-img" />
                    </div>

                    <div className="event-center">
                        <div className="event-bg-img"><img src={backImage} alt="" /></div>
                        <div className="event-bg-img"><img src={backImage2} alt="" /></div>
                    </div>
                </div>
            </div> */}
        </div>
      </div>
    </div>
  );
}

export default EventTopic;
