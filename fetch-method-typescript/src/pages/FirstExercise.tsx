import { useEffect, useState } from "react";
import ButtonComponent from "../components/ButtonComponent";
import { Post } from "../types/PostInterface";
import { Comment } from "../types/CommentInterface";
import { UserInterface } from "../types/UserInterface";
import { User } from "../models/User";
import RecordList from "../components/RecordList";

type DataType = Post | Comment | UserInterface;

function FirstExercise() {
  const [category, setCategory] = useState<string>("posts");
  const [data, setData] = useState<DataType[]>([]);

  const fetchData = async (selectedCategory: string) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/${selectedCategory}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }

      if (category === "users") {
        const data: UserInterface[] = await response.json();
        const users = data.map(
          (user) => new User(user.id, user.name, user.username, user.email)
        );
        setData(users);
        return;
      }
      const data: DataType[] = await response.json();
      setData(data);
    } catch (err: any) {
      console.log(err.message);
    } finally {
    }
  };

  useEffect(() => {
    fetchData(category);
  }, [category]);
  return (
    <>
      <ButtonComponent
        type="button"
        action={() => setCategory("posts")}
        title="Load Posts"
        disable={false}
      />
      <ButtonComponent
        type="button"
        action={() => setCategory("comments")}
        title="Load Comments"
        disable={false}
      />
      <ButtonComponent
        type="button"
        action={() => setCategory("users")}
        title="Load Users"
        disable={false}
      />
      <RecordList dataType={data} filterType={category} />
    </>
  );
}

export default FirstExercise;
