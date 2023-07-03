import CarouselPromotion from "../Component/CarouselPromotion";
import CarouselProduct from "../Component/CarouselProduct";
import axios from "axios";
import React, { useEffect, useState, lazy, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ProductCard = lazy(() => import("../Component/ProductCard"));
const Home = () => {
  const [productCardData, setProductCardData] = useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Testing useEffect");
        const responseProductCard = await axios.get("/api/product-card-data");
        console.log(responseProductCard.data);
        console.log(responseProductCard.status);
        setProductCardData(responseProductCard.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="">
      <ToastContainer />
      <CarouselPromotion />
      <h1 className="text-2xl font-medium my-4 mt-[5rem]">
        <b>Promotions</b>
      </h1>

      <div class="border-2 border-vnv-light-grey rounded-xl p-5">
        <CarouselProduct />
      </div>

      <h1 className="text-2xl font-medium my-4 mt-[3rem]">
        <b>Discover Products</b>
      </h1>
      <div>
        <div className="grid grid-cols-4 gap-2">
          <Suspense fallback={<div>Loading...</div>}>
            {productCardData.map((data) => (
              <ProductCard
                productName={data.productName}
                price={data.price}
                image={data.productImage}
                id={data._id}
                disc={data.discount && data.discount.$numberDecimal}
              />
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Home;
