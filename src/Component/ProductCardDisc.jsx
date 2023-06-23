import testImg from "../Image/Test.jpg";

const ProductCard = () => {

    return (
        
        <div class="border-2 border-slate-300 rounded-xl p-2 m-0">
            <div class="max-w-sm rounded overflow-hidden">
                <img class="w-full" src={testImg} alt="Product" />
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Lorem Ipsum</div>
                    <p class="text-red-500 text-base">
                        Rp.50.000
                    </p>
                    <p class="text-gray-700 text-base">
                        <strike>Rp.100.000</strike>
                    </p>
                </div>
            </div>
        </div>
        
    );
  };
  
  export default ProductCard;