import React, { useState, useEffect } from "react";

const WebsiteOpacityEffect = ({ paymentStatus }) => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    // Calculate the due date as two months from the current date
    const currentDate = new Date();
    const dueDate = new Date(currentDate);
    dueDate.setMinutes(dueDate.getMinutes() + 1);

    // If the due date has passed and payment hasn't been received, start fading out the website
    if (!paymentStatus) {
        const intervalId = setInterval(() => {
            // Gradually decrease opacity by 0.5 every 5 seconds until it reaches 0.5
            setOpacity((prevOpacity) => {
                const newOpacity = Math.max(prevOpacity - 0.5, ); // Decrease opacity by 0.5
                console.log("Opacity:", newOpacity);
                // if (newOpacity <= 0.5) {
                //     clearInterval(intervalId); // Stop interval when opacity reaches 0.5
                // }
                return newOpacity;
            });
        }, 2000); // Adjust the interval time as needed

        // Clear the interval when opacity reaches 0.5
        return () => clearInterval(intervalId);
    }
}, [paymentStatus]);


  return (
    <div style={{ opacity: opacity }}>
      <h1>Welcome to My Website</h1>
      <p>
        This website will gradually fade out if payment is not received within
        two months.
      </p>
    </div>
  );
};

export default WebsiteOpacityEffect;
