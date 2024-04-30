import React, { useEffect, useState } from "react";
import image1 from "../../assets/images/image/img1.jpg";
import image2 from "../../assets/images/image/img2.jpg";
import image3 from "../../assets/images/image/img3.jpg";
import image4 from "../../assets/images/image/img4.jpg";
import { heroSlider } from "../../Data";
const ProductHero = () => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const currentSlide = heroSlider[currentNumber];
  const [currentIndex, setCurrentIndex] = useState(0);
  const SliderItems = heroSlider; // Array to hold your slider items, you can populate it with your image URLs
  const ThumbnailItems = []; // Array to hold your thumbnail items, you can populate it with your image URLs

  const nextSlide = () => {
    setCurrentNumber((prevIndex) => (prevIndex + 1) % SliderItems.length);
    console.log(currentIndex);
  };

  const prevSlide = () => {
    setCurrentNumber((prevIndex) =>
      prevIndex === 0 ? SliderItems.length - 1 : prevIndex - 1
    );
    console.log("index", currentIndex);
  };
  //   let carouselDom = document.querySelector('.carousel');
  //   let SliderDom = carouselDom.querySelector(".carousel .list");

  //   let SliderItemsDom = SliderDom.querySelectorAll(".carousel .list .item");

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentNumber === SliderItems.length - 1) {
        setCurrentNumber(-1);
      }
      setCurrentNumber((prevNumber) => prevNumber + 1);
    }, 15000); // 5 minutes in milliseconds
    console.log(currentNumber);

    // SliderDom.appendChild(SliderItemsDom[0]);
    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, [currentNumber]);
  return (
    <div>
      <div class="carousel">
        <div class="list">
          {/* {SliderItems.map((item, index) => ( */}
          <div
            // key={index}
            className={"item"}
          >
            <img src={currentSlide.img} />
            <div className="bg-blend-overlay w-full  h-screen bg-gradient-to-b from-gray-900/50 to-gray-500/50 py-20 px-24 ">
              <div class="content">
                <div class="author">{currentSlide.author}</div>
                <div class="title">{currentSlide.title}</div>
                <div class="topic">{currentSlide.topic}</div>
                <div class="des">{currentSlide.desc}</div>
                <div class="buttons">
                  <button className="bg-orange-500">SEE MORE</button>
                  <button className="border-2 border-orange-500">SUBSCRIBE</button>
                </div>
              </div>
            </div>
          </div>
          {/* ))} */}
          {/* 
            <div class="item">
            <img src={image2}/>

                <div class="content">
                    <div class="author">LUNDEV</div>
                    <div class="title">DESIGN SLIDER</div>
                    <div class="topic">ANIMAL</div>
                    <div class="des">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                    </div>
                    <div class="buttons">
                        <button>SEE MORE</button>
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
            <div class="item">
            <img src={image3}/>

                <div class="content">
                    <div class="author">LUNDEV</div>
                    <div class="title">DESIGN SLIDER</div>
                    <div class="topic">ANIMAL</div>
                    <div class="des">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                    </div>
                    <div class="buttons">
                        <button>SEE MORE</button>
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
            <div class="item">
            <img src={image4}/>

                <div class="content">
                    <div class="author">LUNDEV</div>
                    <div class="title">DESIGN SLIDER</div>
                    <div class="topic">ANIMAL</div>
                    <div class="des">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                    </div>
                    <div class="buttons">
                        <button>SEE MORE</button>
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
            </div> */}
        </div>
        <div class="thumbnail">
          {heroSlider.map((item, index) => (
            <div class="item" onClick={() => setCurrentNumber(index)}>
              <img src={item.img} />
              <div class="content">
                <div class="title">Name Slider</div>
                <div class="description">Description</div>
              </div>
            </div>
          ))}

          {/* <div class="item">
                        <img src={image2} />

                        <div class="content">
                            <div class="title">
                                Name Slider
                            </div>
                            <div class="description">
                                Description
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <img src={image3} />

                        <div class="content">
                            <div class="title">
                                Name Slider
                            </div>
                            <div class="description">
                                Description
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <img src={image4} />

                        <div class="content">
                            <div class="title">
                                Name Slider
                            </div>
                            <div class="description">
                                Description
                            </div>
                        </div>
                    </div> */}
        </div>

        <div class="arrows">
          <button id="prev" className="bg-orange-500  hover:bg-orange-700" onClick={prevSlide}>
            {"<"}
          </button>
          <button id="next" className="bg-orange-500 hover:bg-orange-700"onClick={nextSlide}>
            {">"}
          </button>
        </div>
        <div class="time"></div>
      </div>
    </div>
  );
};

export default ProductHero;
