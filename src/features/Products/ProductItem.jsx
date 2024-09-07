import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { differenceInDays } from "date-fns";
import { formatCurrency } from "../../utils/helpers";
import { HiHeart } from "react-icons/hi";

import { HiOutlineHeart } from "react-icons/hi";
import {
  isInCart as isInCartAction,
  removeFromCart,
  addToCart,
} from "../cart/cartSlice";
import {
  removeFromWishList,
  addToWishList,
  isInWishList as isInWishListAction,
} from "../cart/wishListSlice";
import { Rating } from "@mui/material";

function ProductItem({ product }) {
  const {
    rating: { rating, count },
    created_at,
    id,
    title,
    image,
    price,
    discount,
    description,
    maxQuantity,
    category,
  } = product;
  const isInWishList = useSelector(isInWishListAction(id));
  const isInCart = useSelector(isInCartAction(id));
  const outOfStock = maxQuantity === 0;
  const disPatch = useDispatch();
  function handleAddToCart() {
    disPatch(
      addToCart({
        ...product,
        quantity: 1,
      })
    );
    if (isInWishList) {
      disPatch(removeFromWishList(id));
    }
  }
  function handleAddToWishList() {
    disPatch(addToWishList(product));
    if (isInCart) disPatch(removeFromCart(id));
  }

  // console.log(rating, count);
  return (
    <div>
      <div className="overflow-hidden aspect-square p-5  relative  group">
        {!outOfStock && (
          <div className="absolute top-1 left-2 flex flex-col space-y-2">
            {differenceInDays(new Date(), created_at) <= 7 && (
              <span className=" py-1 px-2 text-sm font-light  bg-Button1 text-white rounded-md uppercase">
                new
              </span>
            )}
            {discount > 0 && (
              <span className=" text-center py-1 px-2 text-sm font-light  bg-Secondary2 text-white rounded-md uppercase">
                {(1 - (price - discount) / price).toFixed(1) * 100}%
              </span>
            )}
          </div>
        )}

        <img className=" object-fill h-full w-full " src={image} alt={title} />
        {!outOfStock &&
          (isInWishList ? (
            <button
              onClick={() => disPatch(removeFromWishList(id))}
              className=" text-center absolute top-1 right-1 rounded-full p-[3px] bg-slate-100"
            >
              <HiHeart className="text-2xl text-Secondary2 " />
            </button>
          ) : (
            <button
              onClick={handleAddToWishList}
              className=" text-center  absolute top-1 right-1 rounded-full p-[3px] bg-slate-100 hover:bg-Secondary2"
            >
              <HiOutlineHeart className="text-2xl text-black" />
            </button>
          ))}
        {!outOfStock &&
          (!isInCart ? (
            <button
              onClick={handleAddToCart}
              className=" py-2 font-normal text-sm absolute w-full bottom-[-100%] capitalize bg-black text-white text-center left-0 z-40 group-hover:bottom-0 transition-all duration-300 "
            >
              add to cart
            </button>
          ) : (
            <button
              onClick={() => disPatch(removeFromCart(id))}
              className=" py-2 font-normal text-sm absolute w-full  capitalize bg-Secondary2 text-white text-center left-0 z-40 bottom-0 transition-all duration-300 "
            >
              Remove from cart
            </button>
          ))}
      </div>
      <h4 className="mt-4 font-medium ">
        <Link className="hover:underline" to={`/products/${id}`}>
          {" "}
          {title.slice(0, 40)}
        </Link>
      </h4>
      <div className="space-x-2 flex ">
        {outOfStock ? (
          <h4 className=" capitalize font-medium text-Secondary2 ">
            {" "}
            out of stock{" "}
          </h4>
        ) : (
          <div className="flex items-center flex-wrap gap-x-2">
            <h4 className=" font-medium text-Secondary2 ">
              {formatCurrency(price - discount)}
            </h4>
            {discount > 0 && (
              <h4 className=" font-medium text-gray-500 line-through ">
                {formatCurrency(price)}
              </h4>
            )}
            <Rating
              size="small"
              name="half-rating-read"
              defaultValue={rating}
              precision={0.5}
              readOnly
            />
            <span className=" font-medium text-gray-500">({count})</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductItem;
