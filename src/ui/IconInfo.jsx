import { HiOutlineHeart } from "react-icons/hi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useSelector } from "react-redux";
import { getCart } from "../features/cart/cartSlice";
import { getWishList } from "../features/cart/wishListSlice";
import { Link } from "react-router-dom";
import { Tooltip } from "@chakra-ui/react";
import { useUser } from "../features/authentication/useUser";
import { FaRegUser } from "react-icons/fa";

function IconInfo({ setIsMenuOpen, isMenuOpen }) {
  const { isAuthenticated } = useUser();
  const cart = useSelector(getCart);
  const wishList = useSelector(getWishList);

  return (
    <div className="flex space-x-4 items-center ">
      <Tooltip label="wishlist" placement="bottom">
        <Link
          to={"/wishlist"}
          className="relative hover:text-Secondary2 transition-colors duration-300"
        >
          <HiOutlineHeart className="text-2xl " />
          {wishList.length > 0 && (
            <span className="absolute top-[-8px] right-[-10px] w-[20px] h-[20px] flex items-center justify-center rounded-full p-1  bg-Secondary2 text-white  ">
              {wishList.length}
            </span>
          )}
        </Link>
      </Tooltip>
      <Tooltip label="cart" placement="bottom">
        <Link
          to={"/cart"}
          className="relative  hover:text-Secondary2 transition-colors duration-300"
        >
          <HiOutlineShoppingCart className="text-2xl" />
          {cart.length > 0 && (
            <span className="absolute top-[-8px] right-[-10px] w-[20px] h-[20px] flex items-center justify-center rounded-full p-1  bg-Secondary2 text-white  ">
              {cart.length}
            </span>
          )}
        </Link>
      </Tooltip>
      {isAuthenticated && (
        <Tooltip label="profile" placement="bottom">
          <Link
            to={"/account"}
            className=" hover:text-Secondary2 transition-colors duration-300"
          >
            <FaRegUser className="text-2xl" />
          </Link>
        </Tooltip>
      )}
      <div className="w-8">
        <button
          onClick={(e) => {
            e.stopPropagation();
            // console.log("clicked");
            setIsMenuOpen((pre) => !pre);
          }}
          className={`w-8 md:hidden  flex flex-col gap-2 ${
            isMenuOpen ? "fixed right-2 top-5" : "relative"
          }   z-[2000]`}
        >
          <span
            className={`${
              isMenuOpen && "  rotate-45  translate-x-1  translate-y-[8px] "
            } transition-transform h-[2px] w-full bg-black rounded-full`}
          ></span>
          <span
            className={`${
              isMenuOpen ? "opacity-0" : "opacity-100"
            } h-[2px] w-full bg-black rounded-full`}
          ></span>
          <span
            className={`${
              isMenuOpen && "-rotate-45 translate-x-[3px]  -translate-y-[12px]"
            } transition-transform h-[2px] w-full bg-black rounded-full`}
          ></span>
        </button>
      </div>
    </div>
  );
}

export default IconInfo;
