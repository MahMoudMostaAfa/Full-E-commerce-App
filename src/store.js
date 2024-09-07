import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import wishListReducer from "./features/cart/wishListSlice";
const store = configureStore({
  reducer: { cart: cartReducer, wishList: wishListReducer },
});
store.subscribe(() => {
  try {
    const cartState = store.getState().cart;
    const serializedCartState = JSON.stringify(cartState);
    localStorage.setItem("cart", serializedCartState);
    ///////////////////
    const wishListState = store.getState().wishList;
    const serializedWishListState = JSON.stringify(wishListState);
    localStorage.setItem("wishList", serializedWishListState);
  } catch (e) {
    console.error("Could not save state to localStorage", e);
  }
});
export default store;
