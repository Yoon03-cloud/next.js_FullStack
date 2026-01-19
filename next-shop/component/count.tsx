"use client";

import React from "react";

function Count() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <p>{count}</p>
      <button
        className="rounded-2xl border-black bg-pink-300"
        onClick={() => setCount((prev) => prev + 1)}
      >
        {" "}
        +
      </button>
    </div>
  );
}

export default Count;
