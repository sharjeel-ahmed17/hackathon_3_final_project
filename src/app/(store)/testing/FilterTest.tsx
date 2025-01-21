'use client';

import { useState } from 'react';

const Filter = ({ data, onApplyFilters } : { data : any, onApplyFilters : any }) => {
  const categories = [...new Set(data.map((item) => item.category))];
  const colors = [...new Set(data.flatMap((item) => item.colors))];
  const sizes = [...new Set(data.flatMap((item) => item.sizes))];
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  const handleApply = () => {
    const filteredData = data.filter((item) => {
      return (
        (!selectedCategory || item.category === selectedCategory) &&
        (!selectedColor || item.colors.includes(selectedColor)) &&
        (!selectedSize || item.sizes.includes(selectedSize))
      );
    });
    onApplyFilters(filteredData);
  };

  return (
    <div className="bg-white shadow-md p-4 rounded-md w-full max-w-sm">
      <h2 className="text-xl font-bold mb-4">Filters</h2>
      
      {/* Category Filter */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Category</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Color Filter */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Color</label>
        <select
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2"
        >
          <option value="">All Colors</option>
          {colors.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>

      {/* Size Filter */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Size</label>
        <select
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2"
        >
          <option value="">All Sizes</option>
          {sizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      {/* Apply Button */}
      <button
        onClick={handleApply}
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default Filter;
