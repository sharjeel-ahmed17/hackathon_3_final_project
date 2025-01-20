import ImageGallery from "./ImageGallery"
import ProductContent from "./ProductContent"


const ProductDetailsComponent = () => {
  return (
    <div>
      <div  className="flex md:flex-row flex-col">
        <div className="md:w-[50%] w-full">
          <ImageGallery />
        </div>
        <div className="w-[50%] w-ful">
          <ProductContent />
        </div>
      </div>
    </div>
  )
}

export default ProductDetailsComponent