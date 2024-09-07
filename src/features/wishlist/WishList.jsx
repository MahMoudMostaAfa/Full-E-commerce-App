import { useDispatch, useSelector } from "react-redux";
import { getWishList, removeFromWishList } from "../cart/wishListSlice";
import { useNavigate } from "react-router-dom";
import ProductItem from "../Products/ProductItem";
import { addToCart } from "../cart/cartSlice";
import Heading from "../../ui/Heading";
import { useProducts } from "../Products/useProducts";
import Spinner from "../../ui/Spinner";
import ProductsContainer from "../../ui/ProductsContainer";
import Empty from "../../ui/Empty";
import SecondaryButton from "../../ui/SecondaryButton";
function WishList() {
  const wishList = useSelector(getWishList);
  const { products, isLoading } = useProducts();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (!wishList.length) {
    return <Empty title="wishlist" goTo="/products" />;
  }

  function handleMoveAllToBag() {
    wishList.forEach((product) => {
      dispatch(addToCart({ ...product, quantity: 1 }));
      dispatch(removeFromWishList(product.id));
    });
    navigate("/cart");
  }
  return (
    <div>
      <div className="mb-12">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl">Wishlist ({wishList.length})</h3>
          <SecondaryButton
            title="move all to bag"
            onClick={handleMoveAllToBag}
          />
        </div>
        <ProductsContainer>
          {wishList.map((product) => {
            return <ProductItem key={product.id} product={product} />;
          })}
        </ProductsContainer>
      </div>
      <div className="flex justify-between items-center mb-6 ">
        <Heading title="just for you" color="black" />
        <button
          onClick={() => navigate("/products")}
          className="border border-black capitalize font-normal text-lg px-6 py-2 "
        >
          see all
        </button>
      </div>
      {isLoading ? (
        <Spinner />
      ) : (
        <ProductsContainer>
          {products.slice(0, 4).map((product) => {
            return <ProductItem key={product.id} product={product} />;
          })}
        </ProductsContainer>
      )}
    </div>
  );
}

export default WishList;
