import { Post } from "../types/PostInterface";
import { Comment } from "../types/CommentInterface";
import { UserInterface } from "../types/UserInterface";
import { useEffect, useState } from "react";

type DataType = Post | Comment | UserInterface;

interface DataTypeProps {
  dataType: DataType[];
  filterType: string;
  filterValue: string;
}

function RecordList({ dataType, filterType, filterValue }: DataTypeProps) {
  const [filterAttribute, setFilterAttribute] = useState<string>("title");
  const getItemKeys = (obj: DataType) => {
    const firstFourKeys = Object.entries(obj).slice(0, 4);
    return Object.fromEntries(firstFourKeys);
  };
  const filteredData = dataType.filter((item) => {
    const value = (item as any)[filterAttribute];
    if (typeof value === "string") {
      return value.toLowerCase().includes(filterValue.toLowerCase());
    }
    return false;
  });
  useEffect(() => {
    const attribute =
      filterType === "posts"
        ? "title"
        : filterType === "comments"
        ? "name"
        : "name";
    setFilterAttribute(attribute);
  }, [filterType]);
  return (
    <>
      <ul>
        {filteredData.map((item, index) => {
          const itemsKeys = getItemKeys(item);
          return (
            <div key={index}>
              {Object.entries(itemsKeys).map(([key, value]) => (
                <p key={key}>
                  <strong>{key}:</strong>
                  {value}
                </p>
              ))}
            </div>
          );
        })}
      </ul>
    </>
  );
}

export default RecordList;
