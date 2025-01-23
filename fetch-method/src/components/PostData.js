import React, { useEffect, useState } from "react";
import ButtonComponent from "./ButtonComponent";
import axios from "axios";
import PaginationComponent from "./PaginationComponent";

function PostData() {
  const [posts, setPosts] = useState([]);
  const [postData, setPostData] = useState({
    title: "",
    body: "",
  });
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

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

  const handlePaginationPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const forwardPage = () => setCurrentPage(currentPage + 1);
  const backwardPage = () => setCurrentPage(currentPage - 1);

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
        {currentPosts.map((post, index) => (
          <li key={index}>{post.title}</li>
        ))}
        <ButtonComponent
          title="Atgal"
          disable={currentPage <= 1 ? true : false}
          action={backwardPage}
        />
        <PaginationComponent
          arrayLenght={posts.length}
          postsPerPage={postsPerPage}
          handlePagination={handlePaginationPage}
          currentPage={currentPage}
        />
        <ButtonComponent
          title="Pirmyn"
          disable={
            currentPage === Math.ceil(posts.length / postsPerPage)
              ? true
              : false
          }
          action={forwardPage}
        />
      </ul>
    </>
  );
}

export default PostData;
