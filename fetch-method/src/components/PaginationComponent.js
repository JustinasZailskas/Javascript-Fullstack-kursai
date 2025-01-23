import styles from "./Pagination.module.css";

const PaginationComponent = ({
  arrayLenght,
  postsPerPage,
  handlePagination,
  currentPage,
}) => {
  const numArray = [];
  for (let i = 1; i <= Math.ceil(arrayLenght / postsPerPage); i++) {
    numArray.push(i);
  }
  return (
    <>
      {numArray.map((num, index) => (
        <button
          key={index}
          onClick={() => handlePagination(num)}
          className={currentPage === num ? styles.active : ""}
        >
          {num}
        </button>
      ))}
    </>
  );
};
export default PaginationComponent;
