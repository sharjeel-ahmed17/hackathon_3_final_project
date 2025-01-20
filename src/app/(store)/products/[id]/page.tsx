import LikeGrid from "@/components/products/likeGrid/LikeGrid"
import ProductDetailsComponent from "@/components/products/productDetails/ProductDetailsComponent"
import TabBarComponent from "@/components/products/tabbarComponent/TabBarComponent"


const ProductDetails = () => {
  return (
    <div>
      {/* todo breadcrumb */}
  <ProductDetailsComponent />
  <TabBarComponent />
  <LikeGrid />
    </div>
  )
}

export default ProductDetails