import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCardDisc from '../Component/ProductCardDisc'
import { useEffect,useState } from 'react';
import axios from 'axios';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const CarouselProduct = () => {
  const [productCardDataDisc, setProductCardDataDisc] = useState([]);
  useEffect(() => {
      const fetchData = async () => {
        try {
          console.log("Testing useEffect")
          const response = await axios.get('/api/product-card-data-disc');
          console.log(response.data);
          console.log(response.status);
          setProductCardDataDisc(response.data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }, []);
    
    return (
        
        <Carousel responsive={responsive}>
            {productCardDataDisc.map((data)=>(
              <ProductCardDisc productName = {data.productName}
              price = {data.price}
              image = {data.productImage}
              disc = {10}/>
            ))}
        </Carousel>

        
        
    );
  };
  
  export default CarouselProduct;