import React, { useEffect, useState } from "react";
import ButtonComponent from "./ButtonComponent";
import Spinner from "./Spinner";

function FilterData() {
  const [data, setData] = useState([]);
  const [filterValue, setFilterValue] = useState("");

  const fecthData = async (filterValue) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      const data = await response.json();
      const filterData = data.filter((item) =>
        item.title.toLowerCase().includes(filterValue)
      );
      setData(filterData);
    } catch (err) {
    } finally {
    }
  };

  useEffect(() => {
    setTimeout(() => fecthData(filterValue), 1000);
  }, [filterValue]);

  const handleFilterValue = (e) => {
    console.log(e.target.value);
    setFilterValue(e.target.value);
  };

  return (
    <>
      <form>
        <input
          type="text"
          name="filterValue"
          value={filterValue}
          onChange={handleFilterValue}
        />
      </form>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}

export default FilterData;
