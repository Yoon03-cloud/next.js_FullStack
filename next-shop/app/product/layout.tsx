import React from "react";

function ProductLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-pink-200">
      {children}
    </div>
  );
}

export default ProductLayout;
