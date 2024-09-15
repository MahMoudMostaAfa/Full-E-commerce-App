import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import { formatCurrency } from "../../utils/helpers";
import { useDispatch } from "react-redux";
import { changeQuantityById, removeFromCart } from "./cartSlice";
import { Link } from "react-router-dom";

function CartItem({ cartItem }) {
  const { id, title, price, discount, image, quantity, maxQuantity } = cartItem;
  const dispatch = useDispatch();
  return (
    <li className=" max-md:text-sm grid grid-cols-4 font-normal capitalize shadow-sm shadow-gray-200 text-center h-[5rem]  place-items-center  ">
      <div className="flex items-center gap-4 relative">
        <button
          onClick={() => dispatch(removeFromCart(id))}
          className="absolute top-[-5px] left-[-5px] w-4 h-4 bg-Secondary2 text-white text-xs  rounded-full "
        >
          &times;
        </button>
        <img
          className=" max-md:hidden h-12 max-w-full max-h-full"
          src={image}
        />
        <Link
          to={`/products/${id}`}
          className="flex-grow hover:underline hover:cursor-pointer"
        >
          {title}
        </Link>
      </div>
      <div>{formatCurrency(price - discount)}</div>
      <div>
        <NumberInput
          allowMouseWheel
          step={1}
          defaultValue={quantity}
          size="md"
          maxWidth={24}
          border="1px solid"
          borderRadius="md"
          min={1}
          max={maxQuantity}
          value={quantity}
          onChange={(value) =>
            dispatch(changeQuantityById({ id, quantity: value }))
          }
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </div>
      <div>{formatCurrency((price - discount) * quantity)}</div>
    </li>
  );
}

export default CartItem;
