import React from "react";
import Slider from "react-slick";
import Portfolio from "../metadata/portfolio";

export default function Slideshow() {
  var settings = {
    arrows: true,
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    lazyLoad: true,
    variableWidth: true,
    swipeToSlide: true,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {Portfolio.map((image) => {
          return (
            <div key={JSON.stringify(image)} className="portfolioImgDiv">
              <img
                src={image}
                alt="Bemont Wedding Photography"
                className="portfolioImg"
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
