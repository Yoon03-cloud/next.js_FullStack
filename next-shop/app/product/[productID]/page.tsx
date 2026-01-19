// async function ProductDetail({
//   params,
// }: {
//   params: Promise<{ productID: string }>;
// }) {
//   const { productID } = await params;

// --------------------- Server ---------------------

// async function ProductDetail(props: PageProps<"/product/[productID]">) {
//   const { productID } = await props.params;

//   return <div>ProductDetail: {productID}</div>;
// }

// export default ProductDetail;
// --------------------- Server ---------------------

// --------------------- Client ---------------------
"use client";

import { useParams } from "next/navigation";

function ProductDetail() {
  const { productID } = useParams<{ productID: string }>();

  return <div>ProductDetail: {productID}</div>;
}

export default ProductDetail;
