interface Post {
  id: string;
  title: string;
  author: string;
  views: number;
}

async function Blog() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate network delay
  const response = await fetch("http://localhost:4000/post", {
    // next: { revalidate: 10 },
    // tags: ["post"], // on demand revalidation
    // cache: "no-store",
    cache: "force-cache",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  const posts: Post[] = await response.json();

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default Blog;
