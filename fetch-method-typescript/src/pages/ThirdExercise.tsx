import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { Post } from "../types/PostInterface";
import ButtonComponent from "../components/ButtonComponent";
import axios from "axios";
import { Link, Outlet } from "react-router";

interface ErrorInterface {
  name: string;
}
interface NewPostInterface {
  title: "";
  body: "";
}

function ThirdExercise() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [postData, setPostData] = useState<NewPostInterface>({
    title: "",
    body: "",
  });
  const [error, setError] = useState<ErrorInterface>({ name: "" });

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const validateForm = (): ErrorInterface => {
    const newError: ErrorInterface = {
      name: "",
    };
    if (!postData.title || !postData.body) {
      newError.name = "Title and body are required";
    }
    return newError;
  };

  const saveData = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const newError = validateForm();
    if (newError.name) {
      setError(newError);
      return;
    }
    setError({ name: "" });

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
      <nav>
        <Link to="fourth-exercise">Ketvirta uzduotis</Link>
        <Link to="fifth-exercise">Penkta uzduotis</Link>
        <Outlet />
      </nav>
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

export default ThirdExercise;
