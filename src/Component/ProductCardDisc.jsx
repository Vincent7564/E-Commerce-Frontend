import testImg from "../Image/Test.jpg";

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
    <div class="border-2 border-slate-300 rounded-xl p-2 m-0">
      <div class="max-w-sm rounded overflow-hidden">
        <img class="w-full" src={props.image} alt="Product" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">
            <span>{props.productName}{props.disc !== 0 && (
              <div className=" font-bold bg-red-500 text-red-300 text-right">{props.disc}% OFF!</div>
            )}</span>
          </div>
          <p class="text-red-500 text-base">
            {props.disc !== 0 &&
              formatPrice(formattedPrice - (formattedPrice * props.disc) / 100)}
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
