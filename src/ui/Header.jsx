import { useState } from "react";
import IconInfo from "./IconInfo";
import Logo from "./Logo";
import Navigation from "./Navigation";
import SearchProduct from "./SearchProduct";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className=" flex gap-4 justify-between items-center  min-h-16 border-b-[0.5px] border-Primary1">
      <Logo />
      <div
        className={`${
          isMenuOpen ? "absolute" : "hidden"
        } absolute inset-0 bg-black/80 backdrop-blur-sm z-[500]  `}
      ></div>
      <div
        className={`${
          isMenuOpen ? " right-0  " : "right-[-100%]"
        }  px-4 lg:px-0 transition-all duration-300 space-y-3 pt-20 md:pt-0 max-md:fixed z-[1000] top-0 max-md:h-screen flex-col bg-white lg:bg-transparent  lg:flex-row lg:flex-grow lg:flex lg:justify-around`}
      >
        <SearchProduct isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
      {/* <div className="flex gap-6  basis-[40%]  justify-between items-center"> */}
      <IconInfo isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {/* </div> */}
    </header>
  );
}

export default Header;
