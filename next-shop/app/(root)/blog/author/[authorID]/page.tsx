export const revalidate = 60; // Revalidate every 60 seconds(time-based ISR)

export async function generateStaticParams() {
  return [
    { authorID: "author1" },
    { authorID: "author2" },
    { authorID: "author3" },
  ];
}
async function AuthorID({ params }: { params: Promise<{ authorID: string }> }) {
  const { authorID } = await params;
  return (
    <div>
      AuthorID: {authorID} - {new Date().toLocaleTimeString()}
    </div>
  );
}

export default AuthorID;
