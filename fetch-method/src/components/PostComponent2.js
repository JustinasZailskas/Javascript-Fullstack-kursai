import Spinner from "./Spinner";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

function Posts2() {
  const {
    data: post,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.data),
  });

  if (isLoading) return <Spinner />;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h1>Posts</h1>
      <ul>
        {post.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}

export default Posts2;
