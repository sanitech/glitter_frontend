import React, { useState, useEffect } from 'react';
import { heroSlider } from '../../Data';

function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const SliderItems = []; // Array to hold your slider items, you can populate it with your image URLs
    const ThumbnailItems = []; // Array to hold your thumbnail items, you can populate it with your image URLs

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % SliderItems.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? SliderItems.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        // Implement automatic slideshow logic if needed
    }, [currentIndex]);

    return (
        <div className="carousel">
            <div className="list">
                {heroSlider.map((item, index) => (
                    <div
                        key={index}
                        className={index === currentIndex ? 'item active' : 'item'}
                    >
                        <img src={item.img} alt={`Slide ${index + 1}`} />
                        {/* Your content goes here */}
                    </div>
                ))}
            </div>
            <div className="thumbnail">
                {ThumbnailItems.map((item, index) => (
                    <div key={index} className="item">
                        <img src={item} alt={`Thumbnail ${index + 1}`} />
                        {/* Thumbnail content goes here */}
                    </div>
                ))}
            </div>
            <div className="arrows">
                <button id="prev" onClick={prevSlide}>
                    {'<'}
                </button>
                <button id="next" onClick={nextSlide}>
                    {'>'}
                </button>
            </div>
            <div className="time"></div>
        </div>
    );
}

export default Carousel;
