import { useState, useRef, Fragment } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../Image/Test.jpg";
import "../Component/CarouselPromotion.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {
  const sliderRef = useRef(null);

  const handlePrevious = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const carouselvalue = [
    {
      image: require("../Image/Test.jpg"),
      link: "http://www.vincentlimz.com",
    },
    {
      image: require("../Image/Test.jpg"),
      link: "http://www.discord.com",
    },
    {
      image: require("../Image/Test.jpg"),
      link: "http://www.facebook.com",
    },
    {
      image: require("../Image/Test.jpg"),
      link: "http://www.facebook.com",
    },
    {
      image: require("../Image/Test.jpg"),
      link: "http://www.facebook.com",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    autoplay: true,
    appendDots: (dots) => (
      <div style={{ paddingTop: "100px", alignItems: "center" }}>
        <ul
          style={{
            margin: "0px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
  };

  return (
    <Fragment>
      <div className="carousel-container">
        <Slider ref={sliderRef} {...sliderSettings}>
          {carouselvalue.map((carousel, index) => (
            <div key={index} className="image-container">
              <a href={carousel.link}>
                <img className="centered-image" src={carousel.image} alt="" />
              </a>
            </div>
          ))}
        </Slider>
        <div className="controls">
          <button className="button-left" onClick={handlePrevious}>
            <FaChevronLeft width={"100px"} height={"100px"} />
          </button>
          <button className="button-right" onClick={handleNext}>
            <FaChevronRight width={"100px"} height={"100px"} />
          </button>
        </div>
      </div>
    </Fragment>
  );
}
