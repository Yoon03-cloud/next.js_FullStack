"use client";
import React from "react";
import { motion } from "framer-motion";
function UserList({
  authors,
}: {
  authors: { id: number; name: string | null; email: string }[];
}) {
  return (
    <>
      <motion.div
        animate={{
          scale: 2,
          transition: { duration: 2 },
        }}
      >
        {authors.map((author) => (
          <li key={author.id}>
            {author?.name} - {author.email}
          </li>
        ))}
      </motion.div>
    </>
  );
}

export default UserList;
