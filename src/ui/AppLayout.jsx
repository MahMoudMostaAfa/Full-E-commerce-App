import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <>
      <div className="px-2 md:px-24">
        <Header />
        <main className="lg:py-16 py-4 min-h-dvh">
          <Outlet />
        </main>
      </div>
      <div className=" lg:px-24 px-2 bg-Text2">
        <Footer />
      </div>
    </>
  );
}

export default AppLayout;
