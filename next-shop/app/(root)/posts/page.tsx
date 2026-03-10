import Link from "next/link";
import React from "react";

interface Post {
  id: number;
  title: string;
  views: number;
}

async function PostPage() {
  const response = await fetch(`${process.env.API_URL}/posts`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  const posts: Post[] = await response.json();

  return (
    <>
      <h1>PostPage</h1>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              {post.title} - Views: {post.views}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default PostPage;
