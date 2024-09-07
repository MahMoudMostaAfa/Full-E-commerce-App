import FilterBy from "../../ui/FilterBy";
import SortBy from "../../ui/SortBy";

const sortByOptions = [
  { value: "title-asc", label: "Sort by name (A-Z)" },
  { value: "title-desc", label: "Sort by name (Z-A)" },
  { value: "price-asc", label: "Sort by price (low first)" },
  { value: "price-desc", label: "Sort by price (high first)" },
];
const filterOptions = [
  { value: "all", label: "All" },
  { value: "with-discount", label: "with Discount" },
  { value: "no-discount", label: "no Discount" },
];

function ProductsOperations() {
  return (
    <div className="flex items-center gap-8">
      <FilterBy options={filterOptions} />
      <SortBy options={sortByOptions} />
    </div>
  );
}

export default ProductsOperations;
