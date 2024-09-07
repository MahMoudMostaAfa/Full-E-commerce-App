import ProductsList from "../features/Products/ProductsList";
import ProductsOperations from "../features/Products/ProductsOperations";
import Heading from "../ui/Heading";

function Products() {
  return (
    <>
      <div className="flex justify-between items-center mb-14">
        <Heading title="our products" />
        <ProductsOperations />
      </div>
      <ProductsList />
    </>
  );
}

export default Products;
