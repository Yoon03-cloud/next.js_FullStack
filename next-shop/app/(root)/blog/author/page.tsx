import UserList from "@/component/userList";
import prisma from "@/lib/prisma";

async function Author() {
  const authors = await prisma.user.findMany();
  return (
    <>
      <h1>Author Information</h1>
      <UserList authors={authors} />
    </>
  );
}

export default Author;
