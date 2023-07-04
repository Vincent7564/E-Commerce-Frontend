import { NavLink } from "react-router-dom";
import React from "react";
const ProductCard = React.memo((props) => {
  const formattedPrice = props.price ? parseFloat(props.price.toString()) : "";

  const formatPrice = (price) => {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    });
    return formatter.format(price);
  };
  console.log("ProductCard rendered"); 
  return (
    <NavLink to={"/product-detail/" + props.id}>
      <div class="max-w-sm border-2 border-slate-300 rounded-xl m-0">
        <div class="rounded overflow-hidden">
          <img
            class="object-cover w-[24rem] h-[300px]"
            src={props.image}
            alt="Product"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{props.productName}</div>
            <p class="text-gray-700 text-base">
              {props.disc > 0 ? (
                <>
                  <p className=" text-red-400 text-base">
                  <div className=" font-bold bg-red-500 text-red-300 text-right">{props.disc}% OFF!</div>
                    {formatPrice(
                      formattedPrice - (formattedPrice * props.disc) / 100
                    )}
                  </p>
                  <strike>{formatPrice(formattedPrice)}</strike>
                </>
              ) : (
                <>{formatPrice(formattedPrice)}</>
              )}
            </p>
          </div>
        </div>
      </div>
    </NavLink>
  );
});

export default ProductCard;
