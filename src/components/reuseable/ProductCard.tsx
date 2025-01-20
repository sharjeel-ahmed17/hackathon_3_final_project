import { Product } from "@/types/types";
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
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            {product.name}
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {product.name}
          </h1>
          <p className="leading-relaxed mb-3 truncate">{product.description}</p>
          <div className="flex items-center flex-wrap ">
            <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
              Learn More
            </a>
            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              1.2K
            </span>
            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
              6
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
