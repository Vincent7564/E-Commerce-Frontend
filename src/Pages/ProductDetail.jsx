import CarouselProductDetail from '../Component/CarouselProductDetail'
import "../Component/ProductDetailCard.css";
import { useParams, withRouter } from "react-router";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { NavLink } from "react-router-dom";

const ProductDetail = (props) => {
    // routing id
    const params = useParams();
	const [products, setProducts] = useState({ 
        productName: "", 
        price: "",
        description: "",
        qty: "",    
        productImage: "",
        discount: ""
    });

    useEffect(() => {
        const fetchData = async () => {
          try {
            console.log("Testing useEffect")
            console.log(params.id)
            const response = await axios.get('/api/product-detail-data', { params: { id: params.id } });
            setProducts(response.data);
            console.log("product:")
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      }, []);
      

    // qty
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        if(count < products.qty.$numberDecimal){
            setCount(count + 1);
        }
    };

    const decrementCount = () => {
        if(count > 0){
            setCount(count - 1);
        }
    };

    const handleChange = (e)=>{
        setCount(Number(e.target.value));
    };

    // format style
    const formatPrice = (price) => {
        console.log(price)

        const formatter = new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
        });
        return formatter.format(price);
      };

    return (
    <div class="border-[0.2rem] border-slate-300 rounded-xl p-2 m-0">
        <div>
            <div className="grid grid-cols-2 gap-2">
                <CarouselProductDetail productImage = {products.productImage} />
                <div className='py-5 px-1'>
                    <h1 className='text-4xl font-medium py-1'><b>{products.productName}</b></h1>
                    <div className='py-1'>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                    {/* <h1 className='text-4xl font-medium py-1'><b>{formatPrice(products.price.$numberDecimal)}</b></h1> */}

                    <div class="text-2xl font-medium py-1">
                        {products.discount && products.discount.$numberDecimal > 0 ? (
                            <>
                            <p className=" text-red-400">
                                <div className="w-[50%] text-m font-bold bg-red-500 text-red-300 text-right">{products.discount.$numberDecimal}% OFF!</div>
                                    {formatPrice(
                                    products.price.$numberDecimal - (products.price.$numberDecimal * products.discount.$numberDecimal) / 100
                                    )}
                            </p>

                            <strike class="text-xl">{formatPrice(products.price.$numberDecimal)}</strike>
                            </>
                        ) : (
                            <>{formatPrice(products.price.$numberDecimal)}</>
                        )}
                    </div>

                    <div className='text-xl'><b>stock: {products.qty.$numberDecimal} left</b></div>
                    <div className='text-l text-vnv-dark-grey'>send from: Jakarta</div>
                    <p className='text-vnv-dark-grey text-xl py-2 text-justify pe-10'>{products.description}</p>

                </div>
                <div class="grid grid-cols-2 gap-4 py-2 px-10">
                    <div>
                        {/* <button className=" rounded bg-vnv-green-dark text-vnv-light hover:bg-vnv-green-primary py-2 px-5"><a href="/edit-product">Edit Product</a></button> */}
                        <NavLink to={"/edit-product/" + params.id} className=" rounded bg-vnv-green-dark text-vnv-light hover:bg-vnv-green-primary py-2 px-5">
                            Edit Product
                        </NavLink>
                    </div>
                </div>
                <div class="w-[70%] border-[0.1rem] border-vnv-light-grey rounded-xl p-2 m-0 ms-5 me-10">
                    <div className='p-5'>
                        <div className='text-xl'><b>Add to Cart</b></div>
                        <div className='pt-2'>
                            <div class="custom-number-input h-10 w-32">
                                <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                                    <button onClick={decrementCount} class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                                        <span class="m-auto text-2xl font-thin">−</span>
                                    </button>
                                    <input value={count} onChange={handleChange} type="text" inputmode="numeric" pattern="[0-9]*" class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="qty" ></input>
                                    <button onClick={incrementCount} class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                                        <span class="m-auto text-2xl font-thin">+</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='text-end pe-10'>
                            <button className=" rounded bg-vnv-green-dark text-vnv-light hover:bg-vnv-green-primary py-2 px-5">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
  };
  
  export default ProductDetail;

  