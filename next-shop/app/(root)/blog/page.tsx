interface Post {
  id: string;
  title: string;
  author: string;
  views: number;
}

async function Blog() {
  const response = await fetch("http://localhost:4000/post");
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
