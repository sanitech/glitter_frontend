import { useCallback, useEffect, useState } from "react";
import Countdown from "react-countdown";
const EventCountDown = ({ targetDate }) => {
  
  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [countDownTime, setCountDownTime] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setCountDownTime(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });
  return (
    <div className="absolute     bottom-0 right-0  py-5">
      <div className="flex flex-col items-center justify-center w-full h-full gap-8 sm:gap-8 px-20">
        <span className="text-2xl sm:text-3xl font-semibold text-white text-center tracking-widest px-2">
          Act Now, Time is Short
        </span>
        {/* {timerComponents.length ? timerComponents : <span>Time's up!</span>} */}
        <div className="flex justify-center gap-3 sm:gap-8">
          <div className="flex flex-col gap-5 relative">
            <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center backdrop-blur-lg rounded-lg">
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-white"></div>
              <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-white">
                {countDownTime?.days<10?`0${countDownTime?.days}`:countDownTime?.days}
              </span>
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-white"></div>
            </div>
            <span className="text-white text-xs sm:text-2xl text-center capitalize">
              {countDownTime?.days == 1 ? "Day" : "Days"}
            </span>
          </div>
          <div className="flex flex-col gap-5 relative">
            <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center backdrop-blur-lg rounded-lg">
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-white"></div>
              <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-white">
                {countDownTime?.hours<10?`0${countDownTime?.hours}`:countDownTime?.hours}
              </span>
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-white"></div>
            </div>
            <span className="text-white text-xs sm:text-2xl text-center font-medium">
              {countDownTime?.hours == 1 ? "Hour" : "Hours"}
            </span>
          </div>
          <div className="flex flex-col gap-5 relative">
            <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center backdrop-blur-lg rounded-lg">
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-white"></div>
              <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-white">
                {countDownTime?.minutes<10?`0${countDownTime?.minutes}`:countDownTime?.minutes}
              </span>
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-white"></div>
            </div>
            <span className="text-white text-xs sm:text-2xl text-center capitalize">
              {countDownTime?.minutes == 1 ? "Minute" : "Minutes"}
            </span>
          </div>
          <div className="flex flex-col gap-5 relative">
            <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center backdrop-blur-lg rounded-lg">
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-white"></div>
              <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-white">
                {countDownTime?.seconds<10?`0${countDownTime?.seconds}`:countDownTime?.seconds}
              </span>
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-white"></div>
            </div>
            <span className="text-white text-xs sm:text-2xl text-center capitalize">
              {countDownTime?.seconds == 1 ? "Second" : "Seconds"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EventCountDown;
