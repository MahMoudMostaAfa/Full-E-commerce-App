import { HiOutlineSearch } from "react-icons/hi";
import { Link } from "react-router-dom";

import { useCallback, useEffect, useState } from "react";
import { searchProducts as searchProductsApi } from "../services/apiProducts";
import Spinner from "./Spinner";
import { debounce } from "lodash";

function SearchProduct({ isMenuOpen, setIsMenuOpen }) {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const debouncedSearch = useCallback(
    debounce((value) => {
      setDebouncedQuery(value);
    }, 500), // 500ms debounce
    [] // Empty dependency array ensures this function is only created once
  );
  useEffect(() => {
    debouncedSearch(query);
  }, [query, debouncedSearch]);

  useEffect(() => {
    async function searchProducts() {
      try {
        if (query.length < 3) {
          setResults([]);
          setIsLoading(false);
          return;
        }
        setIsLoading(true);
        const response = await searchProductsApi(debouncedQuery);
        setResults(response);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    searchProducts();
  }, [debouncedQuery]);

  return (
    <form className=" lg:order-last  relative basis-2/5 flex items-center  ">
      <input
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        placeholder="what are you looking for ?"
        className="  min-w-full  w-full bg-Secondary  px-4 placeholder:text-sm  pr-2  py-2 "
      />
      <button type="button" className=" items-center relative left-[-25px] ">
        {" "}
        <HiOutlineSearch />
      </button>
      <ul className="max-h-60  overflow-scroll  absolute top-[100%] left-0 w-full rounded-md z-50 bg-Secondary ">
        {isLoading ? <Spinner /> : null}
        {results?.length > 0 &&
          results.map((product) => (
            <li key={product.id}>
              {" "}
              <Link
                onClick={() => {
                  setResults([]);
                  setQuery("");
                  isMenuOpen && setIsMenuOpen(false);
                }}
                to={`/products/${product.id}`}
                className="border-b p-2 border-Primary1 gap-2 grid grid-cols-[auto_1fr] grid-rows-2"
              >
                <img
                  className="row-span-2 col-span-1 w-12"
                  src={product.image}
                  alt="product"
                />
                <div className="row-span-2 col-span-1">
                  <h4> {product.title}</h4>

                  <p className="text-sm">
                    Price: {product.price - product.discount}
                  </p>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </form>
  );
}

export default SearchProduct;
