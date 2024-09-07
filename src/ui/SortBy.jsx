import { useSearchParams } from "react-router-dom";

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "title-asc";

  function handleSortChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }
  return (
    <select
      value={sortBy}
      onChange={handleSortChange}
      className="px-5 py-2 focus:outline-none border-Secondary2 border-2 
   font-normal capitalize rounded-lg shadow-md  "
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default SortBy;
