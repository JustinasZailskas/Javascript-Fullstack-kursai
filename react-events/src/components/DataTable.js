import { useState } from "react";
function DataTable({ data }) {
  const [filter, setFilter] = useState("");

  return (
    <>
      <input
        name="Filter"
        placeholder="Filtruokite"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      />

      {data
        .filter(
          (item) =>
            item.city.toLowerCase().includes(filter.toLowerCase()) ||
            filter === ""
        )
        .map((item) => (
          <ul key={item.ID}>{item.city}</ul>
        ))}
    </>
  );
}

export default DataTable;
