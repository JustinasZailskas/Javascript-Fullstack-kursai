interface FilterInputProps {
  filterValue: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function FilterInput({ filterValue, onChange }: FilterInputProps) {
  return (
    <>
      <form>
        <input
          type="text"
          name="filterValue"
          value={filterValue}
          onChange={onChange}
        />
      </form>
    </>
  );
}
export default FilterInput;
