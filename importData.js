import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "yhf2a9v4",
  dataset: "production",
  useCdn: true,
  apiVersion: "2025-01-13",

  token:
    "skryZmXuM2oQVn6ITBHbM8syVRwnkPafmTvjHFt1q9CgS6L9t8uRpgfXmELtj2e1crnG0fGQ6xjbPQqfVufDdxI9CRbd8naF7vqDe14SQVyEXGTgxQRxinueaLlHPQws6OOHRc7cJHM0gXKNmcOu6qcrHTeqZ8KBkXyoAJ0JN9riC7dgreIV",
  //   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  //   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  //   useCdn: true,
  //   apiVersion: '2025-01-13',
  //   token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);

    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${imageUrl}`);
    }

    const buffer = await response.arrayBuffer();
    const bufferImage = Buffer.from(buffer);

    const asset = await client.assets.upload("image", bufferImage, {
      filename: imageUrl.split("/").pop(),
    });

    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error("Failed to upload image:", imageUrl, error);
    return null;
  }
}

async function uploadProduct(product) {
  try {
    const imageId = await uploadImageToSanity(product.imageUrl);

    if (imageId) {
      const document = {
        _type: "product",
        name: product.name,
        description: product.description,
        price: product.price,
        image: {
          _type: "image",
          asset: {
            _ref: imageId,
          },
        },
        category: product.category,
        discountPercent: product.discountPercent,
        isNew: product.isNew,
      };

      const createdProduct = await client.create(document);
      console.log(
        `Product ${product.name} uploaded successfully:`,
        createdProduct
      );
    } else {
      console.log(
        `Product ${product.name} skipped due to image upload failure.`
      );
    }
  } catch (error) {
    console.error("Error uploading product:", error);
  }
}

async function importProducts() {
  try {
    const response = await fetch(
      `https://template1-neon-nu.vercel.app/api/products`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const products = await response.json();

    for (const product of products) {
      await uploadProduct(product);
    }
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

importProducts();
