"use client";
export default function Error({ error }: { error: Error; digest?: string }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1>Something went wrong! Please Try Again.</h1>
      <p>{error.message}</p>
    </div>
  );
}
