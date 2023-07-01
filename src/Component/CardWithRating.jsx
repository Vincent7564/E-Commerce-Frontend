const CardWithRating = (props) => {
    const formattedPrice = props.price ? parseFloat(props.price.toString()) : '';

    const formatPrice = (price) => {
        const formatter = new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
        });
        return formatter.format(price);
      };

    return (
        <div class="border-2 border-slate-300 rounded-xl p-2 m-0">
            Pencarian dari 1-Max Length DB
            <div class="max-w-sm rounded overflow-hidden">
                <img class="w-full" src={props.image} alt="Product" />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{props.productName}</div>
                    <p class="text-gray-700 text-base">
                        {formatPrice(formattedPrice)}
                    </p>
                    <div>
                        <span>Terjual</span>
                        <span className="fa fa-star checked">Rating</span>
                    </div>
                </div>
            </div>
        </div>
        
    );
  };
  
  export default CardWithRating;