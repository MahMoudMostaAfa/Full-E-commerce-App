import ProductsContainer from "../../ui/ProductsContainer";
import Spinner from "../../ui/Spinner";
import ProductItem from "./ProductItem";
import { useProducts } from "./useProducts";
function ProductsList() {
  const { isLoading, products } = useProducts();

  if (isLoading) return <Spinner />;

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
