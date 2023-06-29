import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import testImg from "../Image/Test.jpg";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const CarouselProductDetail = (props) => {

    return (
        
        <Carousel responsive={responsive}>
            <img class="object-cover w-[500px] h-[500px] m-auto" src={props.productImage} alt="Product" />
            <img class="object-cover w-[500px] h-[500px] m-auto" src={testImg} alt="Product" />
            <img class="object-cover w-[500px] h-[500px] m-auto" src={testImg} alt="Product" />
            <img class="object-cover w-[500px] h-[500px] m-auto" src={testImg} alt="Product" />
            <img class="object-cover w-[500px] h-[500px] m-auto" src={testImg} alt="Product" />
        </Carousel>

        
        
    );
  };
  
  export default CarouselProductDetail; 


