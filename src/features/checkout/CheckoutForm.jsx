import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import CouponForm from "../cart/CouponForm";
import BillingDetails from "./BillingDetails";
import CheckoutPreview from "./CheckoutPreview";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, getTotalCartPrice } from "../cart/cartSlice";
import { useOrder } from "./useOrder";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function CheckoutForm() {
  const { order, isLoading } = useOrder();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, reset, formState, handleSubmit } = useForm();
  const { errors } = formState;
  const cart = useSelector(getCart);
  const totalPrice = useSelector(getTotalCartPrice).toFixed(2);
  function onSubmit(formData) {
    const billingDetails = {
      ...formData,
    };
    const orderItems = cart;
    order(
      {
        billingDetails,
        orderItems,
        totalPrice,
        payment: formData.payment,
      },
      {
        onSuccess: () => {
          reset();
          dispatch(clearCart());
          navigate("/");
          toast.success("order placed successfully");
        },
      }
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className=" min-h-full grid gap-x-20 grid-cols-5 grid-rows-2 "
    >
      <BillingDetails register={register} errors={errors} />
      <CheckoutPreview />
      <div className=" col-span-3 ">
        <div className="w-[70%] mx-auto flex gap-3 items-center justify-between">
          <input
            className="accent-black w-5 h-5 "
            type="radio"
            name="payment"
            id="visa"
            value="visa"
            {...register("payment")}
          />
          <label
            htmlFor="visa"
            className=" flex-grow flex items-center  justify-between gap-2"
          >
            <span className="font-medium">Bank</span>
            <div className="flex gap-2">
              <img src="/visa.svg" alt="visa" />
              <img src="/visa2.svg" alt="visa" />
            </div>
          </label>
        </div>
        <div className="w-[70%] mx-auto flex gap-3 items-center justify-between">
          <input
            defaultChecked
            className="accent-black w-5 h-5 "
            type="radio"
            name="payment"
            id="cash"
            value="cash"
            {...register("payment")}
          />
          <label
            htmlFor="cash"
            className=" flex-grow flex items-center  justify-between gap-2"
          >
            <span className="font-medium">cash</span>
          </label>
        </div>
        <div className="w-[88%] ml-auto py-5 space-y-5">
          <CouponForm />
          <Button title={isLoading ? " ordering..." : "place order"} />
        </div>
      </div>
    </form>
  );
}

export default CheckoutForm;
