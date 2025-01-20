import { Product } from "@/types/types";
import { Star, StarHalf } from "lucide-react";
// import { Star, StarHalf } from "lucide-react";
// import Image from "next/image";
interface IProduct {
  product: Product;
}

const ProductCard = ({ product }: IProduct) => {
  // console.log(product);

  return (
    <div className="p-4 md:w-1/4 w-1/2 ">
      <div className="h-full  rounded-lg overflow-hidden">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={product.image}
          alt="blog"
        />
        <div className="">
         
          <h3 className="title-font text-lg font-medium text-gray-900 mb-3">
            {product.name}
          </h3>
        <div className="flex gap-1">
          <Star  fill="brown" stroke="none" size={18}/>
          <Star  fill="brown" stroke="none" size={18}/>
          <Star  fill="brown" stroke="none" size={18}/>
          <Star  fill="brown" stroke="none" size={18}/>
          <StarHalf  fill="brown" stroke="none" size={18}/>
          <div>
            <span>3.5/</span>
            <span>5</span>
          </div>
        </div>
{/* price */}
         <div className="flex gap-4">
          <p>$120</p>
          {/* discount percentage */}
          <div className="flex gap-4">
            <p>$260</p>
            <div>-20%</div>
          </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
