import React, { useEffect, useState } from "react";
import ButtonComponent from "./ButtonComponent";
import axios from "axios";

function PostData() {
  const [posts, setPosts] = useState([]);
  const [postData, setPostData] = useState({
    title: "",
    body: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleInputChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newError = {};
    if (!postData.title || !postData.body) {
      newError.name = "Title and body are required";
    }
    return newError;
  };

  const saveData = (e) => {
    e.preventDefault();
    const newError = validateForm();
    if (Object.keys(newError).length > 0) {
      setError(newError);
      return;
    }
    setError({});

    axios
      .post("https://jsonplaceholder.typicode.com/posts", postData)
      .then((response) => {
        const updatedList = [response.data, ...posts];
        setPosts(updatedList);
        setPostData({ title: "", body: "" });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <form onSubmit={saveData}>
        <input
          type="text"
          name="title"
          value={postData.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="body"
          value={postData.body}
          onChange={handleInputChange}
        />
        {error.name && <p style={{ color: "red" }}>{error.name}</p>}
        <ButtonComponent type="submit" title="Save" />
      </form>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}

export default PostData;
