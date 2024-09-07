import { createSlice } from "@reduxjs/toolkit";

function getCartFromLocalStorage() {
  const cart = localStorage.getItem("cart");
  if (cart) return JSON.parse(cart);
  else
    return {
      cart: [],
    };
}

const initialState = getCartFromLocalStorage();
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      // action is item object
      state.cart.push(action.payload);
    },
    removeFromCart(state, action) {
      //action is id
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    clearCart(state) {
      state.cart = [];
    },
    decreasingQuantity(state, action) {
      // action.payload is id
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity--;
      if (item.quantity === 0) {
        cartSlice.caseReducers.removeFromCart(state, action);
      }
    },
    increasingQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
    },
    changeQuantityById(state, action) {
      const item = state.cart.find((item) => item.id === action.payload.id);
      item.quantity = action.payload.quantity;
    },
  },
});

export default cartSlice.reducer;
export const {
  increasingQuantity,
  decreasingQuantity,
  removeFromCart,
  clearCart,
  addToCart,
  changeQuantityById,
} = cartSlice.actions;

export const getCart = (state) => state.cart.cart;
export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce(
    (sum, item) => sum + item.quantity * (item.price - item.discount),
    0
  );
export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);
export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.id === id)?.quantity ?? 0;
// this way is not recommended so use reselect library
export const isInCart = (id) => (state) =>
  state.cart.cart.some((item) => item.id === id);
