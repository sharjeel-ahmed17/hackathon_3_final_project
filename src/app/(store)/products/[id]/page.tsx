import LikeGrid from "@/components/products/likeGrid/LikeGrid"
import ProductDetailsComponent from "@/components/products/productDetails/ProductDetailsComponent"
import TabBarComponent from "@/components/products/tabbarComponent/TabBarComponent"
import BreadCrumbComponent from "./BreadCrumbComponent"


const ProductDetails = () => {
  return (
    <div>
      <BreadCrumbComponent/>
  <ProductDetailsComponent />
  <TabBarComponent />
  <LikeGrid />
    </div>
  )
}

export default ProductDetails