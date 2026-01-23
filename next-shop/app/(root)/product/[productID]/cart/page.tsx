import Count from "@/component/count";

function Cart() {
  return (
    <>
      <p> Cart Screen - {new Date().toTimeString()} </p>

      <Count />
    </>
  );
}

export default Cart;
