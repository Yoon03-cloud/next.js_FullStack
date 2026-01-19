import React from "react";

async function Docs({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  return (
    <div>
      <p>Docs Page</p>
      {slug?.length >= 2 ? (
        <p>
          Title - {slug[0]} & Subtitle - {slug[1]}{" "}
        </p>
      ) : (
        slug?.length === 1 && <p>Title - {slug[0]}</p>
      )}
    </div>
  );
}

export default Docs;
