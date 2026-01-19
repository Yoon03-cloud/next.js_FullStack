import React from "react";

async function ProductList({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { page = "1", category = "", query = "" } = await searchParams;
  return (
    <div>
      <h1>Product List Page</h1>
      <p>Page: {page}</p>
      <p>Category: {category}</p>
      <p>Query: {query}</p>
    </div>
  );
}

export default ProductList;
