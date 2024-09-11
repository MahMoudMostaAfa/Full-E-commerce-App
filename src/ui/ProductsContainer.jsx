function ProductsContainer({ children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-24 px-6  lg:px-14  ">
      {children}
    </div>
  );
}

export default ProductsContainer;
