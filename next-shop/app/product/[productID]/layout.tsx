import React from "react";

// async function ProductDetailLayout({
//   children,
//   params,
// }: Readonly<{
//   children: React.ReactNode;
//   params: Promise<{ productID: string }>;
// }>) {
//   const { productID } = await params;

async function ProductDetailLayout(props: LayoutProps<"/product/[productID]">) {
  const { productID } = await props.params;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-blue-200">
      <h1>Product Detail Header : {productID}</h1>
      {props.children}
    </div>
  );
}

export default ProductDetailLayout;
