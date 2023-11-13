import CarouselPromotion from '../Component/CarouselPromotion'
import ProductCard from '../Component/ProductCard'
import CarouselProduct from '../Component/CarouselProduct';
import axios from 'axios';
import React,{ useEffect, useState } from 'react';
import { ToastContainer,toast } from 'react-toastify';

const Home = () => {
    const [productCardData, setProductCardData] = useState([]);
    const [toastMessage, setToastMessage] = useState('');
    useEffect(() => {
        const fetchData = async () => {
          try {
            console.log("Testing useEffect")
            const responseProductCard = await axios.get('/api/product-card-data');
            console.log(responseProductCard.data);
            console.log(responseProductCard.status);
            setProductCardData(responseProductCard.data);
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      }, []);
    
      useEffect(() => {
        if (toastMessage) {
          toast.success(toastMessage, {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      }, [toastMessage]);

    return (
        <div className="">
          <ToastContainer/>
              <CarouselPromotion />
            <h1 className='text-2xl font-medium my-4 mt-[5rem]'><b>Promotionsss</b></h1>
            
            <div class="border-2 border-vnv-light-grey rounded-xl p-5">
              <CarouselProduct />
            </div>

            <h1 className='text-2xl font-medium my-4 mt-[3rem]'><b>Discover Products</b></h1>
            <div>
                <div className="grid grid-cols-4 gap-2">
                    {productCardData.map((data)=>(
                        <ProductCard productName = {data.productName}
                        price = {data.price}
                        image = {data.productImage}
                        id = {data._id}
                        disc={data.discount && data.discount.$numberDecimal}
                        />
                    ))}
                </div>
            </div>
      </div>
    );
  };
  
  export default Home;
