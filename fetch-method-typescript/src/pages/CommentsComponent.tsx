import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

interface Comments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

function CommentsComponent() {
  const { postId } = useParams();
  const [comments, setComments] = useState<Comments[]>([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => setComments(response.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <p>Cia yra komentaru langas</p>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment.name}</li>
        ))}
      </ul>
    </>
  );
}
export default CommentsComponent;
