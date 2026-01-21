"use client";
import React from "react";
import { usePathname } from "next/navigation";

function NotFound() {
  const pathname = usePathname();
  const firstRoute = pathname.split("/")[1];
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">404 | {firstRoute} Not Found</h1>
    </div>
  );
}

export default NotFound;
