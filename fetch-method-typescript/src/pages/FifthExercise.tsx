import { useEffect, useState } from "react";
import { Post } from "../types/PostInterface";
import axios from "axios";
import ButtonComponent from "../components/ButtonComponent";
import { Link } from "react-router";

export default function FifthExercise() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <ul>
        {posts.map((post, index) => (
          <div key={index}>
            <li key={post.id}>{post.title}</li>
            <Link to={`/post-comments/${post.id}`}>
              <ButtonComponent
                key={index}
                type="button"
                title="View Comments"
              />
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
}
