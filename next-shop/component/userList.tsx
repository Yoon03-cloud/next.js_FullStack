"use client";
import React from "react";
import { motion } from "framer-motion";
import { use } from "react";
function UserList({
  authors,
}: {
  authors: Promise<{ id: number; name: string | null; email: string }[]>;
}) {
  const allUsers = use(authors);
  return (
    <>
      <motion.div
        animate={{
          scale: 2,
          transition: { duration: 2 },
        }}
      >
        {allUsers.map((author) => (
          <li key={author.id}>
            {author?.name} - {author.email}
          </li>
        ))}
      </motion.div>
    </>
  );
}

export default UserList;
