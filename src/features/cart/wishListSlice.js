import { createSlice } from "@reduxjs/toolkit";

function getWishListFromLocalStorage() {
  const wishList = localStorage.getItem("wishList");
  if (wishList) return JSON.parse(wishList);
  else
    return {
      wishList: [],
    };
}

const initialState = getWishListFromLocalStorage();
// const initialState = {
//   wishList: [
//     {
//       id: 1,
//       created_at: "2024-08-17T07:20:26+00:00",
//       title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//       description:
//         "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//       price: 109.95,
//       discount: 10,
//       image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//       maxQuantity: 6,
//       category: "men's clothing",
//     },
//   ],
// };

const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    addToWishList(state, action) {
      // action is item object
      state.wishList.push(action.payload);
    },
    removeFromWishList(state, action) {
      //action is id
      state.wishList = state.wishList.filter(
        (item) => item.id !== action.payload
      );
    },
    clearWishList(state) {
      state.wishList = [];
    },
  },
});

export default wishListSlice.reducer;
export const { removeFromWishList, clearWishList, addToWishList } =
  wishListSlice.actions;
export const getWishList = (state) => state.wishList.wishList;
export const isInWishList = (id) => (state) =>
  state.wishList.wishList.some((item) => item.id === id);
