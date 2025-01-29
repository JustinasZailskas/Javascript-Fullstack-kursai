import React, { useEffect, useState } from "react";
import ButtonComponent from "./ButtonComponent";
import axios from "axios";
import PaginationComponent from "./PaginationComponent";
import styles from "../components/Post.module.css";
import ModalComponent from "./ModalComponent";
import modalStyles from "../components/Modal.module.css";

function PostData() {
  const [posts, setPosts] = useState([]);
  const [postData, setPostData] = useState({
    title: "",
    body: "",
  });
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [comments, setComments] = useState([]);

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

  const openModal = (postId) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => {
        console.log(response.data);
        setComments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    setIsOpenModal(true);
  };
  const closeModal = () => setIsOpenModal(false);
  const showComments = comments.map((comment) => {
    <p>
      {comment.id} tekstas: {comment.name}
    </p>;
  });

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
          <div className={styles.postBlock}>
            <li key={post.id}>{post.title}</li>
            <ButtonComponent
              key={index}
              title="View Comments"
              action={() => openModal(post.id)}
            />
          </div>
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
        {
          <ModalComponent isOpen={isOpenModal} duom={comments}>
            <ButtonComponent title="&times;" action={closeModal} />
          </ModalComponent>
        }
      </ul>
    </>
  );
}

export default PostData;
