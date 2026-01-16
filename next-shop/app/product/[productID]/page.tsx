// async function ProductDetail({
//   params,
// }: {
//   params: Promise<{ productID: string }>;
// }) {
//   const { productID } = await params;

async function ProductDetail(props: PageProps<"/product/[productID]">) {
  const { productID } = await props.params;

  return <div>ProductDetail: {productID}</div>;
}

export default ProductDetail;
