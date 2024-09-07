import React, { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ChakraProvider } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./customHooks/ScrollToTop";

import AppLayout from "./ui/AppLayout";
// import Home from "./pages/Home";
const Home = React.lazy(() => import("./pages/Home"));
// import Login from "./pages/Login";
const Login = React.lazy(() => import("./pages/Login"));
// import NotFound from "./pages/NotFound";
const NotFound = React.lazy(() => import("./pages/NotFound"));
// import Account from "./pages/Account";
const Account = React.lazy(() => import("./pages/Account"));
// import Cart from "./pages/Cart";
const Cart = React.lazy(() => import("./pages/Cart"));
// import Contact from "./pages/Contact";
const Contact = React.lazy(() => import("./pages/Contact"));
// import Signup from "./pages/Signup";
const Signup = React.lazy(() => import("./pages/Signup"));
// import Products from "./pages/Products";
const Products = React.lazy(() => import("./pages/Products"));
// import About from "./pages/About";
const About = React.lazy(() => import("./pages/About"));
// import ProductDetails from "./pages/ProductDetails";
const ProductDetails = React.lazy(() => import("./pages/ProductDetails"));
// import WishList from "./pages/WishList";
const WishList = React.lazy(() => import("./pages/WishList"));
// import Checkout from "./pages/Checkout";
const Checkout = React.lazy(() => import("./pages/Checkout"));
// import Profile from "./features/account/Profile";
const Profile = React.lazy(() => import("./features/account/Profile"));
// import Address from "./features/account/Address";
const Address = React.lazy(() => import("./features/account/Address"));
// import Payment from "./features/account/Payment";
const Payment = React.lazy(() => import("./features/account/Payment"));
// import Orders from "./features/orders/Orders";
const Orders = React.lazy(() => import("./features/orders/Orders"));
// import Returns from "./features/account/Returns";
const Returns = React.lazy(() => import("./features/account/Returns"));
// import Cancals from "./features/account/Cancals";
const Cancals = React.lazy(() => import("./features/account/Cancals"));
// import OrderDetails from "./features/orders/OrderDetails";
const OrderDetails = React.lazy(() => import("./features/orders/OrderDetails"));
import ProtectedRoutes from "./ui/ProtectedRoute";
import SpinnerFull from "./ui/SpinnerFull";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // it means that the data will be considered stale[not vaild] after 1 minute
      //  staleTime: 1000 * 60,
      staleTime: 0,
    },
  },
});
function App() {
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<SpinnerFull />}>
            <Routes>
              <Route element={<AppLayout />}>
                <Route index path="/" element={<Home />} />
                <Route path="products" element={<Products />} />
                <Route path="contact" element={<Contact />} />
                <Route path="about" element={<About />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />

                <Route
                  path="account"
                  element={
                    <ProtectedRoutes>
                      <Account />
                    </ProtectedRoutes>
                  }
                >
                  <Route index element={<Navigate to="profile" />} />
                  <Route path="profile" element={<Profile />} />
                  <Route path="address" element={<Address />} />
                  <Route path="payment" element={<Payment />} />
                  <Route path="orders" element={<Orders />} />
                  <Route path="returns" element={<Returns />} />
                  <Route path="cancals" element={<Cancals />} />
                </Route>
                <Route
                  path="checkout"
                  element={
                    <ProtectedRoutes>
                      <Checkout />
                    </ProtectedRoutes>
                  }
                />
                <Route
                  path="orderDetails/:id"
                  element={
                    <ProtectedRoutes>
                      <OrderDetails />
                    </ProtectedRoutes>
                  }
                />

                <Route path="cart" element={<Cart />} />
                <Route
                  path="products/:productId"
                  element={<ProductDetails />}
                />
                <Route path="wishlist" element={<WishList />} />
                <Route path="not-found" element={<NotFound />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 2000,
            },
            error: {
              duration: 2000,
            },
            style: {
              fontSize: "1rem",
              fontWeight: "normal",
              maxWidth: "400px",
              padding: "16px 24px",
              backgroundColor: "#DB4444",
              color: "#ffffff",
            },
          }}
        />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
