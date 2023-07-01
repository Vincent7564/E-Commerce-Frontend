import { useState,useRef, Fragment, useEffect } from "react";
import Slider from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "../Image/Test.jpg";
import "../Component/CarouselPromotion.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
export default function Carousel() {
  const sliderRef = useRef(null);

  const handlePrevious = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  // const carouselvalue = [
  //   {
  //     image: require("../Image/Test.jpg"),
  //     link: "http://www.vincentlimz.com",
  //   },
  //   {
  //     image: require("../Image/Test.jpg"),
  //     link: "http://www.discord.com",
  //   },
  //   {
  //     image: require("../Image/Test.jpg"),
  //     link: "http://www.facebook.com",
  //   },
  //   {
  //     image: require("../Image/Test.jpg"),
  //     link: "http://www.facebook.com",
  //   },
  //   {
  //     image: require("../Image/Test.jpg"),
  //     link: "http://www.facebook.com",
  //   },
  // ];


  
  const [carouselData,setCarouselData] = useState([]);

  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const responseCarouselData = await axios.get('/api/carousel-data');
        setCarouselData(responseCarouselData.data)
      }
      catch(error){
        console.error(error);
      }
    }
    fetchData();
  },[]);
  
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    autoplay: true,
    centermode: true,
    arrows:false,
    appendDots: (dots) => (
      <div style={{ paddingTop: "100px", alignItems: "center" }}>
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        className="carousel-dots">
          {dots}
        </ul>
      </div>
    ),
  };

  return (
    <Fragment>
      <div className="carousel-container carousel-slider">
        <Slider ref={sliderRef} {...sliderSettings}>
          {carouselData.map((carousel, index) => (
            <div key={index} className="image-container">
              <a href={carousel.hyperlink}>
                <img className="centered-image" src={carousel.image} alt="" />
              </a>
            </div>
          ))}
        </Slider>
        <div className="controls">
          <button className="button-left" onClick={handlePrevious}>
            <AiOutlineLeft size={"2em"}/>
          </button>
          <button className="button-right" onClick={handleNext}>
            <AiOutlineRight size={"2em"} />
          </button>
        </div>
      </div>
    </Fragment>
  );
}
