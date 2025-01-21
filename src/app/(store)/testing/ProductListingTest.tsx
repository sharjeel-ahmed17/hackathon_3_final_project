'use client';

import { useState } from 'react';
import Filter from './FilterTest';

const ProductListingPage = ({ products } : {products  : any}) => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilters = (data  : any) => {
    setFilteredProducts(data);
  };

  return (
    <div className="flex">
      {/* Sidebar Filter */}
      <div className="w-1/4 p-4">
        <Filter data={products} onApplyFilters={handleFilters} />
      </div>

      {/* Product Listing */}
      <div className="w-3/4 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product : any) => (
            <div key={product._id} className="border p-4 rounded-lg shadow-md">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-blue-600 font-bold mt-2">${product.price}</p>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            Product is not found.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductListingPage;
