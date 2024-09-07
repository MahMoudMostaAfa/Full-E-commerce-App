import { useSearchParams } from "react-router-dom";
import ProductsContainer from "../../ui/ProductsContainer";
import Spinner from "../../ui/Spinner";
import ProductItem from "./ProductItem";
import { useProducts } from "./useProducts";
function ProductsList() {
  const { isLoading, error, products } = useProducts();
  // const [searchParams] = useSearchParams();
  if (isLoading) return <Spinner />;
  // const sortBy = searchParams.get("sortBy") || "";
  // let sortedProducts;
  // if (!sortBy) sortedProducts = products;
  // else {
  //   const [key, order] = sortBy.split("-");
  //   sortedProducts = products.sort((a, b) => {
  //     /// price sorting
  //     if (key === "price") {
  //       if (order === "asc") return a[key] - b[key];
  //       else return b[key] - a[key];
  //     } else {
  //       // title sorting
  //       if (order === "asc") return a[key].localeCompare(b[key]);
  //       else return b[key].localeCompare(a[key]);
  //     }
  //   });
  // }
  return (
    <ProductsContainer>
      {products.map((product) => {
        return <ProductItem key={product.id} product={product} />;
      })}
    </ProductsContainer>
  );
}

export default ProductsList;
