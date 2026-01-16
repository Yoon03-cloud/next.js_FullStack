"use client";
import { useState } from "react";

function Cart() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p> Cart Screen </p>
      <p>{count}</p>
      <button
        className="rounded-2xl border-black bg-pink-300"
        onClick={() => setCount((prev) => prev + 1)}
      >
        {" "}
        +
      </button>
    </>
  );
}

export default Cart;
