import testImg from "../Image/Test.jpg";
import { NavLink } from "react-router-dom";

const ProductCard = (props) => {
    const formattedPrice = props.price ? parseFloat(props.price.toString()) : '';

    const formatPrice = (price) => {
        const formatter = new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
        });
        return formatter.format(price);
      };

    return (
        <NavLink to={"/product-detail/" + props.id}>
        <div class="max-w-sm border-2 border-slate-300 rounded-xl m-0">

            <div class="rounded overflow-hidden">
                <img class="object-cover w-[24rem] h-[300px]" src={props.image} alt="Product" />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{props.productName}</div>
                    <p class="text-gray-700 text-base">
                        {formatPrice(formattedPrice)}
                    </p>
                </div>
            </div>
        </div>
        </NavLink>
    );
  };
  
  export default ProductCard;