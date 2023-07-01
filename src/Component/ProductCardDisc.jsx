const ProductCardDisc = (props) => {
  const formattedPrice = props.price ? parseFloat(props.price.toString()) : "";
  const formatPrice = (price) => {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    });
    return formatter.format(price);
  };
  return (
    <div class="max-w-sm border-2 border-slate-300 rounded-xl m-0">
      <div class="rounded overflow-hidden">
        <img class="object-cover w-[24rem] h-[300px]" src={props.image} alt="Product" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">
            <span>{props.productName}{props.disc > 0 ? (
              <div className=" font-bold bg-red-500 text-red-300 text-right">{props.disc}% OFF!</div>
            ):(<div className=" font-bold bg-red-500 text-red-300 text-right">0% OFF!</div>)}</span>
          </div>
          {props.qty.$numberDecimal<5 && <div className=" text-red-600 bg-red-400">
            Tersisa {props.qty.$numberDecimal} 
          </div> }
          <p class="text-red-500 text-base">
            {props.disc > 0 ?
              formatPrice(formattedPrice - (formattedPrice * props.disc) / 100):formatPrice(formattedPrice)}
          </p>
          <p class="text-gray-700 text-base">
            <strike>{formatPrice(formattedPrice)}</strike>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCardDisc;
