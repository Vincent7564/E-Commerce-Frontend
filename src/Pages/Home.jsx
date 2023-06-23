import CarouselPromotion from '../Component/CarouselPromotion'
import ProductCard from '../Component/ProductCard'
import CarouselProduct from '../Component/CarouselProduct';

const Home = () => {

    return (
        <div className="">
            <CarouselPromotion />

            <h1 className='text-2xl font-medium my-4 mt-[5rem]'><b>Promotions</b></h1>
            
            <div class="border-2 border-slate-300 rounded-xl p-5">
                <CarouselProduct />
            </div>

            <h1 className='text-2xl font-medium my-4 mt-[3rem]'><b>Discover Products</b></h1>
            <div>
                <div class="grid grid-cols-4 gap-2">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
      </div>
    );
  };
  
  export default Home;