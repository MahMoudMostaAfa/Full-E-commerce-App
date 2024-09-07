import { useSearchParams } from "react-router-dom";

function FilterBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterValue = searchParams.get("discount") || "all";
  function handleFilterChange(value) {
    searchParams.set("discount", value);
    setSearchParams(searchParams);
  }

  return (
    <div className=" space-x-1 rounded-md font-medium shadow-md ">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => handleFilterChange(option.value)}
          className={`px-8 py-2  ${
            filterValue === option.value ? "bg-Secondary2 text-white" : ""
          } hover:bg-Secondary2 hover:text-white transition-all  capitalize rounded-md  `}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default FilterBy;
