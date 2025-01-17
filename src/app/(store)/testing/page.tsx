import { client } from "@/sanity/lib/client";
import Image from "next/image";
import React from "react";

// Function to fetch all products
const getAllproducts = async () => {
  try {
    const products = await client.fetch(
      `
      *[_type == 'product']{
        name,
        description,
        price,
        "image": image.asset->url
      }
      `
    );
    return products;
  } catch (error) {
    console.log(error);
    return []; // Return an empty array in case of an error
  }
};

// Defining the TypeScript interface for a product
interface IProduct {
  name: string;
  description: string;
  price: number;
  image: string; // Directly store the image URL as a string
}

const Testing = async () => {
  const products = await getAllproducts();

  return (
    <div>
      {products.map((product: IProduct, index: number) => (
        <div key={index}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>

          <Image
            src={product.image} // Use the image URL from the product
            alt={product.name} // Better alt text
            width={200}
            height={200}
            className="size-40"
          />
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Testing;
