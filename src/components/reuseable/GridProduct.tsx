import ProductCard from "./ProductCard"

import { Product } from "@/types/types";
interface IGridProducts{
  products : Product[]
}
const GridProducts = ({products } : IGridProducts) => {
  return (
    <div className="flex flex-wrap -m-4 px-5">
        {
            products.map((product , index : number) => (
                <ProductCard key={index} product={product} />
            ))
        }
        
    </div>
  )
}

export default GridProducts

