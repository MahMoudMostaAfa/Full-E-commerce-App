import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <>
      <div className="px-24">
        <Header />
        <main className="py-16 min-h-dvh">
          <Outlet />
        </main>
      </div>
      <div className="px-24 bg-Text2">
        <Footer />
      </div>
    </>
  );
}

export default AppLayout;
