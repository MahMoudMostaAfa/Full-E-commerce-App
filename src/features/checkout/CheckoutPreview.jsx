import { useSelector } from "react-redux";
import { getCart, getTotalCartPrice } from "../cart/cartSlice";
import { formatCurrency } from "../../utils/helpers";
function CheckoutPreview({ order }) {
  let cart, totalPrice;
  cart = useSelector(getCart);
  totalPrice = useSelector(getTotalCartPrice);
  if (order) {
    cart = order.orderItems;
    totalPrice = order.totalPrice;
  }

  return (
    <div className="col-start-3 col-span-3">
      <div className="w-[70%] mx-auto font-medium ">
        <ul className="space-y-3 mb-4">
          {cart.map((item) => (
            <li className="flex  items-center  gap-3" key={item.id}>
              <img className="max-w-10" src={item.image} />
              <h4 className="max-w-[70%]">
                {item.quantity}x &nbsp;{item.title}
              </h4>
              <span className="ml-auto">
                {" "}
                {formatCurrency(item.price - item.discount)}
              </span>
            </li>
          ))}
        </ul>
        <div className=" mb-3 pb-3 flex justify-between font-medium  border-b border-black   ">
          {" "}
          <span>Subtotal:</span> <span>{formatCurrency(totalPrice)}</span>{" "}
        </div>
        <div className=" mb-3 pb-3 font-medium flex justify-between  border-b border-black   ">
          {" "}
          <span>Shipping:</span> <span>Free</span>{" "}
        </div>
        <div className=" mb-3 pb-3  font-medium flex justify-between  ">
          {" "}
          <span>Total</span> <span>{formatCurrency(totalPrice)}</span>{" "}
        </div>
      </div>
    </div>
  );
}

export default CheckoutPreview;
