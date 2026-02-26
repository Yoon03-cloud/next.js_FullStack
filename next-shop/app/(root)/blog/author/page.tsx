import prisma from "@/lib/prisma";

async function Author() {
  const authors = await prisma.user.findMany();
  return (
    <div>
      <h1>Author Information</h1>
      <ul>
        {authors.map((author) => (
          <li key={author.id}>{author.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Author;
