import { promises } from "dns";

async function AuthorID({ params }: { params: Promise<{ authorID: string }> }) {
  const { authorID } = await params;
  return <div>AuthorID: {authorID}</div>;
}

export default AuthorID;
