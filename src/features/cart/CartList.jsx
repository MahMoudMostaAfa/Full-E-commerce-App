import { useSelector } from "react-redux";
import { getCart } from "./cartSlice";
import Empty from "../../ui/Empty";
import CartItem from "./CartItem";
import SecondaryButton from "../../ui/SecondaryButton";
import { useNavigate } from "react-router-dom";
import CartPrice from "./CartPrice";
function CartList() {
  const navigate = useNavigate();
  const cart = useSelector(getCart);
  if (!cart.length) {
    return <Empty title="cart" goTo="/products" />;
  }
  return (
    <div className="max-md:px-0 px-10">
      <div role="table">
        <div
          role="table header"
          className="grid grid-cols-4 font-medium capitalize shadow-md shadow-gray-200 text-center h-[4rem] text-normal md:h-[5rem] place-items-center mb-6"
        >
          <div>Product</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>sub total</div>
        </div>
        <ul className="space-y-4" role="table content">
          {cart.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))}
        </ul>
      </div>

      <div className="mt-6 mb-10">
        <SecondaryButton
          title="return to shop"
          onClick={() => navigate("/products")}
        />
      </div>
      <CartPrice />
    </div>
  );
}

export default CartList;
