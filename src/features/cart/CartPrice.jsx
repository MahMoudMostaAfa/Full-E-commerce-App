import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import CouponForm from "./CouponForm";
import { useSelector } from "react-redux";
import { getTotalCartPrice } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";
function CartPrice() {
  const navigate = useNavigate();
  const totalPrice = useSelector(getTotalCartPrice);
  return (
    <div className="flex max-md:flex-col max-md:justify-center max-md:items-center items-start gap-4 justify-between">
      <CouponForm />
      <div className="border  p-4 w-[80%] md:w-[40%]  border-black rounded-sm">
        <h4 className="font-semibold capitalize mb-2 ">cart total:</h4>
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
        <div className="text-center">
          <Button
            title="Procees to checkout"
            onClick={() => navigate("/checkout")}
          />
        </div>
      </div>
    </div>
  );
}

export default CartPrice;
