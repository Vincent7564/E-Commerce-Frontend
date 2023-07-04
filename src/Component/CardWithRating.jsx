const CardWithRating = (props) => {
  const formattedPrice = props.price ? parseFloat(props.price.toString()) : "";

  const formatPrice = (price) => {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    });
    return formatter.format(price);
  };

  return (
    <div class="border-2 border-vnv-light-grey rounded-xl p-2 m-0">
      <div class="max-w-sm rounded overflow-hidden">
        <img class="w-full" src={props.image} alt="Product" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{props.productName}</div>
          <p class="text-gray-700 text-base">
            {props.disc > 0 ? (
              <>
                <p className=" text-red-400 text-base">
                  <div className=" font-bold bg-red-500 text-red-300 text-right">
                    {props.disc}% OFF!
                  </div>
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
          Stock Tersisa {props.qty.$numberDecimal}
          <div>Terjual</div>
          <div>
            <span className="fa fa-star checked">Rating</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardWithRating;
