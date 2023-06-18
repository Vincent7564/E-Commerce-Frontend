import { useState, useRef } from 'react';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../Image/Test.jpg'
import '../Component/CarouselPromotion.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
        image : require('../Image/Test.jpg'),
        link : 'http://www.vincentlimz.com'
    },
    {
        image : require('../Image/Test.jpg'),
        link : 'http://www.discord.com',
    },
    {
        image : require('../Image/Test.jpg'),
        link : 'http://www.facebook.com',
    },
    {
        image : require('../Image/Test.jpg'),
        link : 'http://www.google.co.id',
    },
  ]

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='content'>
      <Slider ref={sliderRef} {...sliderSettings}>
        {carouselvalue.map((carousel, index) => (
          <div key={index} className='image-container'>
            <a href={carousel.link}>
              <img className='centered-image' src={carousel.image} alt='' />
            </a>
            <div className='controls-left'>
            <button onClick={handlePrevious}>
                <FaChevronLeft />
            </button>
            <button onClick={handleNext}>
                <FaChevronRight />
            </button>
            </div>
          </div>
        ))}
      </Slider>
      
    </div>
  );
}
