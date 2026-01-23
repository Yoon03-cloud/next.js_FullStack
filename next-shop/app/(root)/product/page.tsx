// "use client";
// import { notFound, useSearchParams } from "next/navigation";

import React, { use } from "react";
// -----------------------------Server Component----------------------
async function ProductList({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { page = "1", category = "", query = "" } = searchParams;
  return (
    <div>
      <h1>Product List Page - {new Date().toTimeString()}</h1>
      <p>Page: {page}</p>
      <p>Category: {category}</p>
      <p>Query: {query}</p>
    </div>
  );
}

export default ProductList;
// -----------------------------Server Component----------------------

// -----------------------------Client Component----------------------

// function ProductList() {
//   const searchParams = useSearchParams();
//   const page = searchParams.get("page") || "1";
//   const category = searchParams.get("category") || "";
//   const query = searchParams.get("query") || "";

//   return (
//     <div>
//       <h1>Product List - {new Date().toTimeString()}</h1>
//       <p>Page: {page}</p>
//       <p>Category: {category}</p>
//       <p>Query: {query}</p>
//     </div>
//   );
// }

// export default ProductList;
// -----------------------------Client Component----------------------
