// async function ProductDetail({
//   params,
// }: {
//   params: Promise<{ productID: string }>;
// }) {
//   const { productID } = await params;

import notFound from "./not-found";

// --------------------- Server ---------------------

async function ProductDetail(props: PageProps<"/product/[productID]">) {
  const { productID } = await props.params;
  if (parseInt(productID) > 100) {
    notFound();
  }

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return <div>ProductDetail: {productID}</div>;
}

export default ProductDetail;
// --------------------- Server ---------------------

// --------------------- Client ---------------------
// "use client";

// import { notFound, useParams } from "next/navigation";

// function ProductDetail() {
//   const { productID } = useParams<{ productID: string }>();

//   if (parseInt(productID) > 110) {
//     notFound();
//     // throw new Error("Product not found");
//   }

//   return <div>ProductDetail: {productID}</div>;
// }

// export default ProductDetail;
