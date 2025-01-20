import { client } from "@/sanity/lib/client";
// import Image from "next/image";
import React from "react";
import GridProducts from "./GridProduct";
import BLog from "./blog";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
// import Hero from "./h";

// Function to fetch all products
const getAllproducts = async () => {
  try {
    const products = await client.fetch(
      `
      *[_type == 'product'][0..3]{
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
      {/* hero component */}
      <div>
        {/* <Hero /> */}

      </div>
      {/* {products.map((product: IProduct, index: number) => (
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
      ))} */}

{/* grid products */}
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/components">Components</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
<div className="mb-20"></div>
      <div>
        <GridProducts products={products}/>
        
      </div>
      {/* grid comp 2 testing */}
      <BLog />
      {/*bradcrums */}
     

    </div>
  );
};

export default Testing;
