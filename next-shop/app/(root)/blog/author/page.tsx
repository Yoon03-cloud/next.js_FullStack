import UserList from "@/component/userList";
import prisma from "@/lib/prisma";
import { Suspense } from "react";

async function GetUsers() {
  return prisma.user.findMany();
}

async function Author() {
  const authors = GetUsers();
  return (
    <>
      <h1>Author Information</h1>
      <Suspense fallback={<div>Please wait, loading...</div>}>
        <UserList authors={authors} />
      </Suspense>
    </>
  );
}

export default Author;
