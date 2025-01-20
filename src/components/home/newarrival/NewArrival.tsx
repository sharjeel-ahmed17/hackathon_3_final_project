import GridProducts from "@/components/reuseable/GridProduct"
import Heading from "@/components/reuseable/Heading"
import { Button } from "@/components/ui/button";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
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

const NewArrival = async () => {
  const products = await getAllproducts();
  return (
    <div>
      <Heading title="new arrival"/>
      <GridProducts products={products}/>
      <div className="w-full mx-auto flex justify-center items-center">
      <Button>
        <Link href='/products'>view all</Link>
      </Button>

      </div>
    </div>
  )
}

export default NewArrival