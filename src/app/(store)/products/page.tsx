import FilterSidebar from "@/components/category/filterSidebar/FilterSidebar"
import ProductListingComponent from "@/components/category/productListingComponent/ProductListingComponent"


const ProdctListing = () => {
  return (
    <div>
      {/* todo breadcrumb */}
      <div className="flex flex-row ">

      <FilterSidebar />
      <ProductListingComponent />
      </div>

    </div>

  )
}

export default ProdctListing