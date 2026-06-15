import PostClient from "@/component/postClient";
import React from "react";

async function PostDetailPage({
  params,
}: {
  params: Promise<{ pid: string }>;
}) {
  const { pid } = await params;
  return (
    <>
      <div>Post Detail Page</div>
      <PostClient postId={pid} />
    </>
  );
}

export default PostDetailPage;
