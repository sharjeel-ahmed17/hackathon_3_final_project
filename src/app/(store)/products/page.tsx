import FilterSidebar from "@/components/category/filterSidebar/FilterSidebar";
import ProductListingComponent from "@/components/category/productListingComponent/ProductListingComponent";
import BreadCrumbComponent from "./BreadCrumbCOmponent";

const ProdctListing = () => {
  return (
    <div>
      {/* todo breadcrumb */}
      <BreadCrumbComponent />
      <div className="flex flex-row ">
        <FilterSidebar />
        <ProductListingComponent />
      </div>
    </div>
  );
};

export default ProdctListing;
