"use client";
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    //global error must include html, head, body tags
    <html>
      <head>
        <title>Error</title>
      </head>
      <body>
        <div>
          <h1>Something went wrong!</h1>
          <p>{error.message}</p>

          <button onClick={() => reset()}>Try Again!</button>
        </div>
      </body>
    </html>
  );
}
