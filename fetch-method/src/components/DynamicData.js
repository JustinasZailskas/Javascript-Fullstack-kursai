import React, { useEffect, useState } from "react";
import ButtonComponent from "./ButtonComponent";
import Spinner from "./Spinner";

function DynamicData() {
  const [category, setCategory] = useState("posts");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fecthData = async (selectedCategory) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/${selectedCategory}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      const data = await response.json();
      setData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fecthData(category);
  }, [category]);

  const getItemKeys = (obj) => {
    const firstFourKeys = Object.entries(obj).slice(0, 4);
    return Object.fromEntries(firstFourKeys);
  };
  if (loading) return <Spinner />;
  if (error) return <p>Error: {error}</p>;
  return (
    <>
      <ButtonComponent action={() => setCategory("posts")} title="Load Posts" />
      <ButtonComponent
        action={() => setCategory("comments")}
        title="Load Comments"
      />
      <ButtonComponent action={() => setCategory("users")} title="Load Users" />

      <ul>
        {data.map((item, index) => {
          const itemsKeys = getItemKeys(item);
          return (
            <div key={index}>
              {Object.entries(itemsKeys).map(([key, value]) => (
                <p key={key}>
                  <strong>{key}:</strong> {value}
                </p>
              ))}
            </div>
          );
        })}
      </ul>
    </>
  );
}

export default DynamicData;
