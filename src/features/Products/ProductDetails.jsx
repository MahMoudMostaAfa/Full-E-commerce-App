import { HiOutlineHeart } from "react-icons/hi";
import { formatCurrency } from "../../utils/helpers";
import { FaTruckFast } from "react-icons/fa6";
import { IoReturnUpForwardSharp } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { useProductDetails } from "./useProductDetails";
import Spinner from "../../ui/Spinner";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreasingQuantity,
  getCurrentQuantityById,
  increasingQuantity,
  isInCart as isInCartAction,
} from "../cart/cartSlice";
import {
  isInWishList as isInWishListAction,
  removeFromWishList,
  addToWishList,
} from "../cart/wishListSlice";
import { Rating } from "@mui/material";

// const product = {
//   id: 1,
//   title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//   price: 109.95,
//   description:
//     "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//   category: "men's clothing",
//   image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//   quantity: 3,
// };

function ProductDetails() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { product, isLoading } = useProductDetails(productId);
  const isInCart = useSelector(isInCartAction(+productId));
  const isInWishList = useSelector(isInWishListAction(+productId));
  const currentQuantity = useSelector(getCurrentQuantityById(+productId));
  if (isLoading) return <Spinner />;

  // console.log(currentQuantity);
  // console.log(product.maxQuantity);
  function handleIncrement() {
    // console.log(currentQuantity);
    if (currentQuantity === product.maxQuantity) return;
    if (currentQuantity === 0) dispatch(addToCart({ ...product, quantity: 1 }));
    else {
      dispatch(increasingQuantity(+productId));
    }
  }
  function handleDecrement() {
    if (currentQuantity === 0) return;
    dispatch(decreasingQuantity(+productId));
    console.log("decrement");
  }

  return (
    <div className="  h-[35rem] grid grid-cols-5 grid-rows-5 gap-6 ">
      <div className=" overflow-hidden  col-span-3  row-span-full  ">
        <img
          className=" transition  duration-300	 hover:rotate-12 object-contain hover:scale-[1.1] w-full h-full max-w-full max-h-full"
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className=" col-span-2  row-span-2  border-b-[1px]  border-b-gray-200">
        <h1 className="font-semibold text-2xl capitalize mb-2">
          {product.title}
        </h1>
        <div className="flex justify-between items-center mb-2">
          {product.maxQuantity > 0 ? (
            <>
              <Rating
                size="small"
                name="half-rating-read"
                defaultValue={product.rating.rating}
                precision={0.5}
                readOnly
              />
              <span className=" font-medium text-gray-500">
                &nbsp; ({product.rating.count} reviews)&nbsp; |&nbsp;&nbsp;
              </span>
              <span className="font-normal text-sm text-Button1 capitalize mr-auto">
                in stock{" "}
              </span>
            </>
          ) : (
            <span className="font-normal text-sm text-Secondary2 capitalize mr-auto">
              out of stock
            </span>
          )}
          {product.maxQuantity <= 5 && (
            <span className=" text-sm  text-Secondary2">
              {" "}
              ({product.maxQuantity} left in stock)
            </span>
          )}
        </div>
        {product.maxQuantity > 0 && (
          <div className="flex items-center gap-2 ">
            <h4 className="font-normal text-xl mb-1">
              {formatCurrency(product.price - product.discount)}
            </h4>
            {product.discount > 0 && (
              <h4 className=" font-normalm text-gray-500 line-through ">
                {formatCurrency(product.price)}
              </h4>
            )}
          </div>
        )}
        <p className="text-sm ">{product.description.slice(0, 120)}</p>
      </div>
      <div className="  col-span-2 row-span-3  ">
        {product.maxQuantity > 0 && (
          <div className="flex justify-between  my-2 gap-5 mb-16 ">
            <div className=" w-[30%] flex border border-gray-300 items-center overflow-hidden rounded-md justify-between">
              <button
                onClick={handleDecrement}
                className="border-r-[1px] text-3xl font-extralight px-2 "
              >
                -
              </button>
              <span>{currentQuantity}</span>
              <button
                onClick={handleIncrement}
                className=" px-2  border-l-[1px] bg-Button2 text-Text text-3xl font-extralight "
              >
                +
              </button>
            </div>
            <div className=" w-[40%] ">
              <button
                onClick={() => navigate("/cart")}
                disabled={!currentQuantity}
                className=" disabled:cursor-not-allowed bg-Button2 w-full h-full rounded-md  text-primary capitalize font-light"
              >
                buy now
              </button>
            </div>

            {isInWishList ? (
              <button
                onClick={() => dispatch(removeFromWishList(+productId))}
                className=" border bg-Secondary2 text-white rounded-md p-1 flex items-center justify-center mr-2"
              >
                <HiOutlineHeart className="text-2xl" />
              </button>
            ) : (
              <button
                onClick={() => dispatch(addToWishList(product))}
                className=" border rounded-md p-1 flex items-center justify-center mr-2"
              >
                <HiOutlineHeart className="text-2xl" />
              </button>
            )}
          </div>
        )}

        <div className="p-4 border space-y-6  border-Primary1 rounded-md">
          <div className="grid grid-cols-[auto_1fr] gap-x-4  items-center grid-rows-2">
            <FaTruckFast className="row-span-2 text-2xl" />
            <h4 className="text-sm font-medium">Fast Delivery</h4>
            <p className="text-xs underline underline-offset-auto	">
              Enter your postal code for Delivery Availability
            </p>
          </div>
          <div className="grid grid-cols-[auto_1fr] gap-x-4  items-center grid-rows-2">
            <IoReturnUpForwardSharp className="row-span-2 text-2xl" />
            <h4 className="text-sm font-medium">Return Delivery</h4>
            <p className="text-xs underline underline-offset-auto	">
              Free 30 Days Delivery Returns. Details
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
