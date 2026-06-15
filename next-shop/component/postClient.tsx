"use client";
import React, { useEffect, useState } from "react";
import instance from "@/app/lib/axios";

interface Post {
  id: string;
  title: string;
  author: string;
  views: number;
}

function PostClient({ postId }: { postId: string }) {
  const [post, setPost] = useState<Post>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // call api and fetch api
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);

        // const res = await fetch(
        //   process.env.NEXT_PUBLIC_API_URL + `/posts/${postId}`,
        // );
        // if (!res.ok) {
        //   throw new Error("Failed to fetch post details");
        // }

        // const data = await res.json();
        //        setPost(data);

        const res = await instance.get(`/posts/${postId}`);
        if (res.status !== 200) {
          throw new Error("Failed to fetch post details");
        }
        setPost(res.data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading post details...</div>;
  }

  if (error) {
    return <div>Error loading post: {error}</div>;
  }

  return (
    <div>
      {post?.title} - by {post?.author} - Views: {post?.views}
    </div>
  );
}

export default PostClient;
